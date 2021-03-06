import React, { PureComponent } from 'react';
import Marquee from './Marquee';
import '../styles/IndexBanner.css';

export default class IndexBanner extends PureComponent {
  componentDidMount() {
    // Code never lies, comments sometimes do.
  	const webgl = {
  		init() {
  			// create webGL canvas context
  			this.elem = document.createElement("canvas");
  			document.getElementById("index-banner").appendChild(this.elem);
  			let gl = this.elem.getContext("webgl");
  			if (!gl) gl = this.elem.getContext("experimental-webgl");
  			if (!gl) return false;
  			this.gl = gl;
  			// set shaders
  			this.vertexShader = gl.createShader(gl.VERTEX_SHADER);
  			gl.shaderSource(
  				this.vertexShader,
  				`
  					uniform mat4 camProj, camView;
  					uniform mat4 model;
  					attribute vec3 position;
  					varying vec3 vPosition;
  					varying vec3 vNormal;
  					varying vec3 vCamNormal;

  					void main(void) {
  						vec4 normal = normalize(model * vec4(position, 0.0));
  						vec4 worldPosition = model * vec4(position, 1.0);
  						gl_Position = camProj * camView * worldPosition;
  						vPosition = worldPosition.xyz;
  						vNormal = normal.xyz;
  						vCamNormal = (camView * normal).xyz;
  					}
  				`
  			);
  			this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  			gl.shaderSource(
  				this.fragmentShader,
  				`
  					precision highp float;
  					uniform mat4 camView;
  					uniform vec3 light1Pos;
  					uniform vec3 light1Color;
  					uniform vec3 light2Pos;
  					uniform vec3 light2Color;
  					uniform vec4 modelColor;
  					varying vec3 vPosition;
  					varying vec3 vNormal;
  					varying vec3 vCamNormal;
  					const float minLight = 0.0001;
  					const float radius = 3.5;
  					const float b = 1.0 / (radius*radius * minLight);

  					void main(void) {

  						vec3 lightDirection = normalize(light1Pos - vNormal);
  						float angle = max(dot(lightDirection, vCamNormal), 0.0);
  						vec3 diffuse = light1Color * angle * modelColor.rgb;

  						float dist = distance(vPosition, light2Pos);
  						float att = max(1.0 - (dist * dist) / (radius * radius), 0.0);
  						lightDirection = normalize(light2Pos - vPosition);
  						angle = max(dot(lightDirection, vNormal), 1.0 * att * att * att * att * att);
  						diffuse += pow(2.0 * att * att * light2Color * angle * modelColor.rgb, vec3(2.0));
  						if (modelColor.a == 0.0) diffuse = 2.0 * modelColor.rgb;

  						vec3 col = modelColor.rgb * diffuse;
  						gl_FragColor = vec4(col.rgb, modelColor.a);
  					}
  				`
  			);
  			// compile shaders
  			gl.compileShader(this.vertexShader);
  			gl.compileShader(this.fragmentShader);
  			this.program = gl.createProgram();
  			gl.attachShader(this.program, this.vertexShader);
  			gl.attachShader(this.program, this.fragmentShader);
  			gl.linkProgram(this.program);
  			gl.useProgram(this.program);
  			// camera
  			this.camera = {
  				proj: this.mat4().uniform("camProj"),
  				view: this.mat4().uniform("camView")
  			};
  			// resize event
  			this.resize();
  			window.addEventListener("resize", () => this.resize(), false);
  			return gl;
  		},
  		Attribute: class {
  			constructor(name) {
  				this.gl = webgl.gl;
  				this.index = gl.getAttribLocation(webgl.program, name);
  				gl.enableVertexAttribArray(this.index);
  				this.buffer = gl.createBuffer();
  				this.numElements = 0;
  			}
  			load(data, size, stride, offset) {
  				this.itemSize = size;
  				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
  				this.gl.bufferData(
  					this.gl.ARRAY_BUFFER,
  					data instanceof Array ? new Float32Array(data) : data,
  					this.gl.STATIC_DRAW
  				);
  				this.numElements = data.length / size;
  				this.gl.vertexAttribPointer(
  					this.index,
  					size,
  					this.gl.FLOAT,
  					false,
  					stride,
  					offset
  				);
  				return this.buffer;
  			}
  			loadIndices(indices) {
  				if (!this.indices) this.indices = this.gl.createBuffer();
  				this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indices);
  				this.gl.bufferData(
  					this.gl.ELEMENT_ARRAY_BUFFER,
  					indices instanceof Array ? new Uint16Array(indices) : indices,
  					this.gl.STATIC_DRAW
  				);
  				this.numElements = indices.length;
  				return this.indices;
  			}
  		},
  		resize() {
  			this.width = this.elem.width = this.elem.offsetWidth;
  			this.height = this.elem.height = this.elem.offsetHeight;
  			this.aspect = this.width / this.height;
  			// perspective projection
  			this.camera.proj.perspective(60).load();
  			this.gl.viewport(
  				0,
  				0,
  				this.gl.drawingBufferWidth,
  				this.gl.drawingBufferHeight
  			);
  		},
  		mat4() {
  			return new this.Mat4();
  		},
  		vec3(x, y, z) {
  			return new this.Vec3(x, y, z);
  		},
  		vec4(x, y, z, w) {
  			return new this.Vec4(x, y, z, w);
  		},
  		Mat4: class {
  			constructor() {
  				this.matrix = new Float32Array([
  					1, 0,	0, 0,
  					0, 1, 0, 0,
  					0, 0, 1, 0,
  					0, 0, 0, 1
  				]);
  				this.gl = webgl.gl;
  				this.u = null;
  			}
  			identity() {
  				const d = this.matrix;
  				d[0] = 1;
  				d[1] = 0;
  				d[2] = 0;
  				d[3] = 0;
  				d[4] = 0;
  				d[5] = 1;
  				d[6] = 0;
  				d[7] = 0;
  				d[8] = 0;
  				d[9] = 0;
  				d[10] = 1;
  				d[11] = 0;
  				d[12] = 0;
  				d[13] = 0;
  				d[14] = 0;
  				d[15] = 1;
  				return this;
  			}
  			translate(x, y, z) {
  				const d = this.matrix;
  				d[12] = d[0] * x + d[4] * y + d[8] * z + d[12];
  				d[13] = d[1] * x + d[5] * y + d[9] * z + d[13];
  				d[14] = d[2] * x + d[6] * y + d[10] * z + d[14];
  				d[15] = d[3] * x + d[7] * y + d[11] * z + d[15];
  				return this;
  			}
  			fromTranslation(x, y, z) {
  				const a = this.matrix;
  				a[0] = 1;
  				a[1] = 0;
  				a[2] = 0;
  				a[3] = 0;
  				a[4] = 0;
  				a[5] = 1;
  				a[6] = 0;
  				a[7] = 0;
  				a[8] = 0;
  				a[9] = 0;
  				a[10] = 1;
  				a[11] = 0;
  				a[12] = x;
  				a[13] = y;
  				a[14] = z;
  				a[15] = 1;
  				return this;
  			}
  			rotateX(angle) {
  				const d = this.matrix;
  				const s = Math.sin(angle);
  				const c = Math.cos(angle);
  				const a10 = d[4];
  				const a11 = d[5];
  				const a12 = d[6];
  				const a13 = d[7];
  				const a20 = d[8];
  				const a21 = d[9];
  				const a22 = d[10];
  				const a23 = d[11];
  				d[4] = a10 * c + a20 * s;
  				d[5] = a11 * c + a21 * s;
  				d[6] = a12 * c + a22 * s;
  				d[7] = a13 * c + a23 * s;
  				d[8] = a10 * -s + a20 * c;
  				d[9] = a11 * -s + a21 * c;
  				d[10] = a12 * -s + a22 * c;
  				d[11] = a13 * -s + a23 * c;
  				return this;
  			}
  			rotateY(angle) {
  				const d = this.matrix;
  				const s = Math.sin(angle);
  				const c = Math.cos(angle);
  				const a00 = d[0];
  				const a01 = d[1];
  				const a02 = d[2];
  				const a03 = d[3];
  				const a20 = d[8];
  				const a21 = d[9];
  				const a22 = d[10];
  				const a23 = d[11];
  				d[0] = a00 * c + a20 * -s;
  				d[1] = a01 * c + a21 * -s;
  				d[2] = a02 * c + a22 * -s;
  				d[3] = a03 * c + a23 * -s;
  				d[8] = a00 * s + a20 * c;
  				d[9] = a01 * s + a21 * c;
  				d[10] = a02 * s + a22 * c;
  				d[11] = a03 * s + a23 * c;
  				return this;
  			}
  			rotateZ(angle) {
  				const d = this.matrix;
  				const s = Math.sin(angle);
  				const c = Math.cos(angle);
  				const a00 = d[0];
  				const a01 = d[1];
  				const a02 = d[2];
  				const a03 = d[3];
  				const a10 = d[4];
  				const a11 = d[5];
  				const a12 = d[6];
  				const a13 = d[7];
  				d[0] = a00 * c + a10 * s;
  				d[1] = a01 * c + a11 * s;
  				d[2] = a02 * c + a12 * s;
  				d[3] = a03 * c + a13 * s;
  				d[4] = a00 * -s + a10 * c;
  				d[5] = a01 * -s + a11 * c;
  				d[6] = a02 * -s + a12 * c;
  				d[7] = a03 * -s + a13 * c;
  				return this;
  			}
  			scale(x, y, z) {
  				const d = this.matrix;
  				d[0] *= x;
  				d[1] *= x;
  				d[2] *= x;
  				d[3] *= x;
  				d[4] *= y;
  				d[5] *= y;
  				d[6] *= y;
  				d[7] *= y;
  				d[8] *= z;
  				d[9] *= z;
  				d[10] *= z;
  				d[11] *= z;
  				return this;
  			}
  			perspective(fov) {
  				const d = this.matrix;
  				const near = 0.01;
  				const far = 100;
  				const top = near * Math.tan(fov * Math.PI / 360);
  				const right = top * webgl.aspect;
  				const left = -right;
  				const bottom = -top;
  				d[0] = 2 * near / (right - left);
  				d[1] = 0;
  				d[2] = 0;
  				d[3] = 0;
  				d[4] = 0;
  				d[5] = 2 * near / (top - bottom);
  				d[6] = 0;
  				d[7] = 0;
  				d[8] = (right + left) / (right - left);
  				d[9] = (top + bottom) / (top - bottom);
  				d[10] = -(far + near) / (far - near);
  				d[11] = -1;
  				d[12] = 0;
  				d[13] = 0;
  				d[14] = -(2 * far * near) / (far - near);
  				d[15] = 0;
  				return this;
  			}
  			multiply(m1, m2) {
  				let b0, b1, b2, b3;
  				const d = this.matrix;
  				const d1 = m1.matrix;
  				const d2 = m2.matrix;
  				const a00 = d1[0], a01 = d1[1], a02 = d1[2], a03 = d1[3], a10 = d1[4], a11 = d1[5], a12 = d1[6], a13 = d1[7],  a20 = d1[8], a21 = d1[9], a22 = d1[10], a23 = d1[11], a30 = d1[12], a31 = d1[13], a32 = d1[14], a33 = d1[15];
  				b0 = d2[0];
  				b1 = d2[1];
  				b2 = d2[2];
  				b3 = d2[3];
  				d[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  				d[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  				d[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  				d[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  				b0 = d2[4];
  				b1 = d2[5];
  				b2 = d2[6];
  				b3 = d2[7];
  				d[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  				d[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  				d[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  				d[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  				b0 = d2[8];
  				b1 = d2[9];
  				b2 = d2[10];
  				b3 = d2[11];
  				d[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  				d[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  				d[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  				d[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  				b0 = d2[12];
  				b1 = d2[13];
  				b2 = d2[14];
  				b3 = d2[15];
  				d[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  				d[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  				d[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  				d[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  				return this;
  			}
  			uniform(uName) {
  				this.u = this.gl.getUniformLocation(webgl.program, uName);
  				return this;
  			}
  			load() {
  				this.gl.uniformMatrix4fv(this.u, this.gl.FALSE, this.matrix);
  				return this;
  			}
  		},
  		Vec3: class {
  			constructor(x = 0.0, y = 0.0, z = 0.0) {
  				this.x = x;
  				this.y = y;
  				this.z = z;
  				this.u = null;
  				this.gl = webgl.gl;
  			}
  			set(x, y, z) {
  				this.x = x;
  				this.y = y;
  				this.z = z;
  				return this;
  			}
  			copy(v) {
  				this.x = v.x;
  				this.y = v.y;
  				this.z = v.z;
  				return this;
  			}
  			lerp(v, s) {
  				this.x += (v.x - this.x) * s;
  				this.y += (v.y - this.y) * s;
  				this.z += (v.z - this.z) * s;
  				return this;
  			}
  			distance(b) {
  				const dx = b.x - this.x;
  				const dy = b.y - this.y;
  				const dz = b.z - this.z;
  				return Math.sqrt(dx * dx + dy * dy + dz * dz);
  			}
  			transformMat4(v, m) {
  				const d = m.matrix;
  				const x = v.x;
  				const y = v.y;
  				const z = v.z;
  				const w = d[3] * x + d[7] * y + d[11] * z + d[15] || 1.0;
  				this.x = (d[0] * x + d[4] * y + d[8] * z + d[12]) / w;
  				this.y = (d[1] * x + d[5] * y + d[9] * z + d[13]) / w;
  				this.z = (d[2] * x + d[6] * y + d[10] * z + d[14]) / w;
  				return this;
  			}
  			uniform(uName) {
  				this.u = this.gl.getUniformLocation(webgl.program, uName);
  				return this;
  			}
  			load() {
  				this.gl.uniform3f(this.u, this.x, this.y, this.z);
  				return this;
  			}
  		},
  		Vec4: class {
  			constructor(x = 0.0, y = 0.0, z = 0.0, w = 0.0) {
  				this.x = x;
  				this.y = y;
  				this.z = z;
  				this.w = w;
  				this.u = null;
  				this.gl = webgl.gl;
  			}
  			set(x, y, z, w) {
  				this.x = x;
  				this.y = y;
  				this.z = z;
  				this.w = w;
  				return this;
  			}
  			lerp(v, s) {
  				this.x += (v.x - this.x) * s;
  				this.y += (v.y - this.y) * s;
  				this.z += (v.z - this.z) * s;
  				this.w += (v.w - this.w) * s;
  				return this;
  			}
  			uniform(uName) {
  				this.u = this.gl.getUniformLocation(webgl.program, uName);
  				return this;
  			}
  			load() {
  				this.gl.uniform4f(this.u, this.x, this.y, this.z, this.w);
  				return this;
  			}
  		}
  	};
  	// set pointer
  	const pointer = {
  		init(canvas) {
  			this.x = this.cx = this.xb = 0;
  			this.y = this.cy = this.yb = 0;
  			this.isDown = false;
  			this.dragging = false;
  			this.add(window, "mousemove,touchmove", e => this.move(e));
  			this.add(canvas.elem, "mousedown,touchstart", e => {
  				this.move(e);
  				this.xb = this.x;
  				this.yb = this.y;
  				this.isDown = true;
  			});
  			this.add(window, "mouseup,touchend,touchcancel", e => {
  				this.isDown = false;
  				this.dragging = false;
  			});
  		},
  		rotate(s, d) {
  			if (this.isDown) {
  				this.cx += (this.x - this.xb) * s * 0.05;
  				this.cy += (this.y - this.yb) * s * 0.05;
  			}
  			this.cx *= d;
  			this.cy *= d;
  			this.xb = this.x;
  			this.yb = this.y;
  		},
  		move(e) {
  			let touchMode = e.targetTouches,
  				pointer;
  			if (touchMode) {
  				pointer = touchMode[0];
  			} else pointer = e;
  			this.x = pointer.clientX;
  			this.y = pointer.clientY;
  			if (this.isDown) this.dragging = true;
  		},
  		add(elem, events, fn) {
  			for (let i = 0, e = events.split(","); i < e.length; i++) {
  				elem.addEventListener(e[i], fn, false);
  			}
  		}
  	};
  	const Sphere = class {
  		constructor(ax, ay, d, radius, r, g, b) {
  			this.pos = webgl.vec3();
  			this.matrix = webgl
  				.mat4()
  				.rotateY(ay)
  				.rotateX(ax)
  				.translate(0, 0, d)
  				.scale(radius, radius, radius)
  				.uniform("model");
  			this.pos.transformMat4(this.pos, this.matrix);
  			this.radius = radius;
  			this.color = webgl.vec4().uniform("modelColor");
  			this.id = 0;
  		}
  		draw() {
  			this.matrix.load();
  			this.color.load();
  			gl.drawElements(gl.TRIANGLES, position.numElements, gl.UNSIGNED_SHORT, 0);
  		}
  	};
  	const sphereGeometry = res => {
  		const vertices = [];
  		const indices = [];
  		for (let i = 0; i <= res; i++) {
  			const theta = i * Math.PI / res;
  			const sinTheta = Math.sin(theta);
  			const cosTheta = Math.cos(theta);
  			for (let j = 0; j <= res; j++) {
  				const phi = j * 2 * Math.PI / res;
  				const sinPhi = Math.sin(phi);
  				const cosPhi = Math.cos(phi);
  				const vx = cosPhi * sinTheta;
  				const vy = cosTheta;
  				const vz = sinPhi * sinTheta;
  				vertices.push(vy, vx, vz);
  			}
  		}
  		for (let i = 0; i < res; i++) {
  			for (let j = 0; j < res; j++) {
  				const first = i * (res + 1) + j;
  				const second = first + res + 1;
  				indices.push(first, second, first + 1, second, second + 1, first + 1);
  			}
  		}
  		// upload geometry to gpu
  		position.load(vertices, 3, 0, 0);
  		position.loadIndices(indices);
  	};
  	// ---- init ----
  	const gl = webgl.init();
  	gl.enable(gl.DEPTH_TEST);
  	gl.enable(gl.CULL_FACE);
  	pointer.init(webgl);
  	const camera = webgl.camera;
  	const newRotationMatrix = webgl.mat4();
  	const rotationMatrix = webgl.mat4();
  	const mov = webgl.vec3(0,0,1);
  	const position = new webgl.Attribute("position");
  	const sphere = sphereGeometry(72);
  	// more inside
  	const inside = () => {
  		const spheres = [];
  		let id = 0;
  		const r = 1;
  		const g = 1;
  		const b = 1;
  		const s = new Sphere(0, 0, 0, 0.1, 10, 7, 4);
  		s.color.set(1, 1, 0.9, 0).load();
  		spheres.push(s);
  		for (let i = 0; i < 10; i++) {
  			for (let k = 0; k < 100; k++) {
  				let ok = true;
  				const s = new Sphere(
  					Math.random() * 2 * Math.PI,
  					Math.random() * 2 * Math.PI,
  					2 * Math.random(),
  					0.3 + Math.random() * 1.5
  				);
  				for (const st of spheres) {
  					if (s.pos.distance(st.pos) < 1.2 * (s.radius + st.radius)) {
  						ok = false;
  						break;
  					}
  				}
  				if (!spheres.length || ok) {
  					s.id = ++id;
  					s.color.set(r, g, b, id / 255).load();
  					spheres.push(s);
  					break;
  				}
  			}
  		}
  		return spheres;
  	};
  	let spheres = inside();
  	const pixel = new Uint8Array(4);
  	let oid = 0;
  	let rotation = 0;
  	let rotationY = -0.004;
  	let lightRadius = 0;
  	let target = spheres[spheres.length - 1];
  	let targetRadius = target.radius * 0.8;
  	// lights
  	const light1Pos = webgl.vec3(0, 0, 3).uniform("light1Pos").load();
  	const light1Color = webgl.vec3(0, 0.125, 0.25).uniform("light1Color").load();
  	const light2Pos = webgl.vec3(0, 0, 0).uniform("light2Pos").load();
  	const light2Color = webgl.vec3(1, 0.8, 0.5).uniform("light2Color").load();
  	// main loop
  	const run = () => {
  		requestAnimationFrame(run);
  		// clear screen
  		gl.clearColor(0, 0, 0, 0);
  		gl.clear(gl.COLOR_BUFFER_BIT);
  		// reach target
  		if (target) {
  			const light = spheres[0];
  			mov.lerp(target.pos, 0.01);
  			light2Pos.copy(mov).load();
  			light.matrix.fromTranslation(mov.x, mov.y, mov.z).scale(lightRadius, lightRadius, lightRadius);
  			lightRadius += (targetRadius - lightRadius) * 0.02;
  		}
  		pointer.rotate(0.001, 0.95);
  		// rotate world matrix
  		newRotationMatrix.identity().rotateY(pointer.cx + 0.001).rotateX(pointer.cy);
  		rotationMatrix.multiply(newRotationMatrix, rotationMatrix);
  		camera.view
  			.fromTranslation(0, 0, -2.5)
  			.multiply(camera.view, rotationMatrix)
  			.load();
  		// draw spheres
  		for (const sphere of spheres) {
  			sphere.draw();
  		}
  		// picking
  		if (pointer.isDown && !pointer.dragging) {
  			gl.readPixels(
  				pointer.x,
  				webgl.height - pointer.y,
  				1,
  				1,
  				gl.RGBA,
  				gl.UNSIGNED_BYTE,
  				pixel
  			);
  			const id = pixel[3];
  			if (id && id !== oid) {
  				for (const sphere of spheres) {
  					if (sphere.id === id) {
  						oid = id;
  						target = sphere;
  						targetRadius = target.radius * 0.8;
  						break;
  					}
  				}
  			}
  		}
  	};
  	requestAnimationFrame(run);
  }

  render() {
    return (
      <div id="index-banner">
		<div className="dark-hover"></div>
        <Marquee/>
      </div>
    );
  }

}
