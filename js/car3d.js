/**
 * ABCD CARS - 3D INTERACTIVE CAR STUDIO (THREE.JS)
 * Cursor-controlled multi-angle vehicle rotation & studio customizer
 * Designed & Developed for ABCD Car by RightClicks.lk
 */

class Car3DViewer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.container = this.canvas.parentElement;
    this.targetRotationY = Math.PI * 0.25; // Initial 45 deg angle
    this.currentRotationY = this.targetRotationY;
    this.targetRotationX = 0.05;
    this.currentRotationX = 0.05;
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.headlightsOn = true;
    this.currentColor = 0x8a0000; // Blood Crimson Red

    // Materials dictionary for color switching
    this.carMaterials = [];

    this.init();
    this.setupLights();
    this.buildShowroom();
    this.buildSupercar();
    this.setupEvents();
    this.animate();
  }

  init() {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x060608, 0.035);

    // Camera
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    this.camera.position.set(0, 1.8, 7.2);
    this.camera.lookAt(0, 0.6, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
  }

  setupLights() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x221115, 1.2);
    this.scene.add(ambientLight);

    // Key studio overhead light
    const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
    mainLight.position.set(4, 8, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 25;
    mainLight.shadow.bias = -0.001;
    this.scene.add(mainLight);

    // Dramatic Crimson Backlight
    const rimLightRed = new THREE.DirectionalLight(0xff1e32, 3.5);
    rimLightRed.position.set(-6, 3, -6);
    this.scene.add(rimLightRed);

    // Secondary cold soft fill
    const fillLight = new THREE.DirectionalLight(0xaaccff, 0.8);
    fillLight.position.set(6, 2, -4);
    this.scene.add(fillLight);

    // Underglow Red Light (attaches to car later)
    this.underglowLight = new THREE.PointLight(0xff0818, 4, 6);
    this.underglowLight.position.set(0, 0.15, 0);
    this.scene.add(this.underglowLight);
  }

  buildShowroom() {
    // Showroom Floor (glossy black with dark red reflections)
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x08080a,
      roughness: 0.18,
      metalness: 0.85
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);

    // Subtle showroom ring grid
    const ringGeo = new THREE.RingGeometry(3.5, 3.54, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8a0000,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.005;
    this.scene.add(ring);

    // Outer faint ring
    const ringOuterGeo = new THREE.RingGeometry(5.2, 5.23, 64);
    const ringOuterMat = new THREE.MeshBasicMaterial({
      color: 0x330006,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25
    });
    const ringOuter = new THREE.Mesh(ringOuterGeo, ringOuterMat);
    ringOuter.rotation.x = -Math.PI / 2;
    ringOuter.position.y = 0.004;
    this.scene.add(ringOuter);
  }

  buildSupercar() {
    this.carGroup = new THREE.Group();

    // 1. CAR BODY PAINT MATERIAL (High-end metallic clearcoat)
    const bodyPaint = new THREE.MeshPhysicalMaterial({
      color: this.currentColor,
      metalness: 0.85,
      roughness: 0.22,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9
    });
    this.carMaterials.push(bodyPaint);

    // Carbon fiber material
    const carbonMat = new THREE.MeshStandardMaterial({
      color: 0x141416,
      roughness: 0.4,
      metalness: 0.3
    });

    // Dark Tinted Glass material
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x111116,
      metalness: 0.9,
      roughness: 0.05,
      transmission: 0.6,
      transparent: true,
      opacity: 0.85
    });

    // Main Lower Chassis
    const lowerChassisGeo = new THREE.BoxGeometry(1.85, 0.38, 4.4);
    const lowerChassis = new THREE.Mesh(lowerChassisGeo, bodyPaint);
    lowerChassis.position.y = 0.45;
    lowerChassis.castShadow = true;
    lowerChassis.receiveShadow = true;
    this.carGroup.add(lowerChassis);

    // Aerodynamic Nose / Front Hood slope
    const noseGeo = new THREE.BoxGeometry(1.78, 0.22, 1.3);
    const nose = new THREE.Mesh(noseGeo, bodyPaint);
    nose.position.set(0, 0.38, 1.8);
    nose.rotation.x = 0.08;
    nose.castShadow = true;
    this.carGroup.add(nose);

    // Front Carbon Splitter
    const splitterGeo = new THREE.BoxGeometry(1.92, 0.06, 0.9);
    const splitter = new THREE.Mesh(splitterGeo, carbonMat);
    splitter.position.set(0, 0.18, 2.15);
    splitter.castShadow = true;
    this.carGroup.add(splitter);

    // Cockpit / Cabin Greenhouse
    const cabinGeo = new THREE.BoxGeometry(1.42, 0.52, 2.1);
    const cabin = new THREE.Mesh(cabinGeo, glassMat);
    cabin.position.set(0, 0.82, -0.15);
    cabin.castShadow = true;
    this.carGroup.add(cabin);

    // Cabin Roof Shell
    const roofGeo = new THREE.BoxGeometry(1.36, 0.06, 1.7);
    const roof = new THREE.Mesh(roofGeo, carbonMat);
    roof.position.set(0, 1.09, -0.15);
    this.carGroup.add(roof);

    // Rear Engine Cover & Aerodynamic Fastback
    const rearDeckGeo = new THREE.BoxGeometry(1.68, 0.3, 1.4);
    const rearDeck = new THREE.Mesh(rearDeckGeo, bodyPaint);
    rearDeck.position.set(0, 0.64, -1.5);
    rearDeck.rotation.x = -0.1;
    rearDeck.castShadow = true;
    this.carGroup.add(rearDeck);

    // Aggressive GT Rear Wing / Spoiler
    const spoilerBladeGeo = new THREE.BoxGeometry(2.0, 0.05, 0.42);
    const spoilerBlade = new THREE.Mesh(spoilerBladeGeo, carbonMat);
    spoilerBlade.position.set(0, 1.05, -2.15);
    spoilerBlade.castShadow = true;
    this.carGroup.add(spoilerBlade);

    // Spoiler Struts
    const strutMat = carbonMat;
    const strutLeft = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.35, 0.2), strutMat);
    strutLeft.position.set(-0.6, 0.85, -2.1);
    const strutRight = strutLeft.clone();
    strutRight.position.set(0.6, 0.85, -2.1);
    this.carGroup.add(strutLeft);
    this.carGroup.add(strutRight);

    // Rear Carbon Diffuser
    const diffuserGeo = new THREE.BoxGeometry(1.78, 0.16, 0.6);
    const diffuser = new THREE.Mesh(diffuserGeo, carbonMat);
    diffuser.position.set(0, 0.22, -2.15);
    this.carGroup.add(diffuser);

    // Dual Quad Titanium Exhaust Pipes
    const exhaustMat = new THREE.MeshStandardMaterial({
      color: 0x333338,
      metalness: 0.95,
      roughness: 0.2
    });
    for (let x of [-0.35, -0.22, 0.22, 0.35]) {
      const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.25, 16), exhaustMat);
      exhaust.rotation.x = Math.PI / 2;
      exhaust.position.set(x, 0.36, -2.24);
      this.carGroup.add(exhaust);
    }

    // LED Headlights (Left & Right)
    this.headlightMats = [];
    const lightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.headlightMats.push(lightMat);

    const headLightLeft = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.08, 0.3), lightMat);
    headLightLeft.position.set(-0.68, 0.48, 2.1);
    headLightLeft.rotation.y = 0.2;
    const headLightRight = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.08, 0.3), lightMat);
    headLightRight.position.set(0.68, 0.48, 2.1);
    headLightRight.rotation.y = -0.2;
    this.carGroup.add(headLightLeft);
    this.carGroup.add(headLightRight);

    // Red LED Rear Lightbar
    const rearLightMat = new THREE.MeshBasicMaterial({ color: 0xff0515 });
    const rearLightBar = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.06, 0.06), rearLightMat);
    rearLightBar.position.set(0, 0.62, -2.21);
    this.carGroup.add(rearLightBar);

    // WHEELS (4 High-performance alloy wheels with red brake calipers)
    this.buildWheels();

    // Add car to scene
    this.scene.add(this.carGroup);
    this.carGroup.rotation.y = this.targetRotationY;
  }

  buildWheels() {
    const wheelRadius = 0.36;
    const wheelWidth = 0.26;

    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x121214,
      roughness: 0.8,
      metalness: 0.1
    });

    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x1e1e24,
      metalness: 0.95,
      roughness: 0.15
    });

    const caliperMat = new THREE.MeshStandardMaterial({
      color: 0xd6182c,
      metalness: 0.6,
      roughness: 0.3
    });

    const wheelPositions = [
      { x: -0.92, y: 0.36, z: 1.35 },  // Front Left
      { x: 0.92, y: 0.36, z: 1.35 },   // Front Right
      { x: -0.95, y: 0.36, z: -1.35 }, // Rear Left
      { x: 0.95, y: 0.36, z: -1.35 }   // Rear Right
    ];

    this.wheels = [];

    wheelPositions.forEach((pos, idx) => {
      const wheelAssembly = new THREE.Group();

      // Tire
      const tireGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, wheelWidth, 24);
      const tire = new THREE.Mesh(tireGeo, tireMat);
      tire.rotation.z = Math.PI / 2;
      tire.castShadow = true;
      wheelAssembly.add(tire);

      // Rim Center & Spokes
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(wheelRadius * 0.72, wheelRadius * 0.72, wheelWidth + 0.01, 16), rimMat);
      rim.rotation.z = Math.PI / 2;
      wheelAssembly.add(rim);

      // Red Brake Caliper
      const caliper = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.18, 0.1), caliperMat);
      caliper.position.set(pos.x > 0 ? -0.04 : 0.04, 0.14, 0.08);
      wheelAssembly.add(caliper);

      wheelAssembly.position.set(pos.x, pos.y, pos.z);
      this.carGroup.add(wheelAssembly);
      this.wheels.push(wheelAssembly);
    });
  }

  setupEvents() {
    // 1. CURSOR HOVER & MOVEMENT OVER HERO SECTION
    // When moving cursor left and right across the window/hero, rotate the vehicle!
    const heroSection = document.getElementById("hero") || document.body;

    const onPointerMove = (clientX, clientY) => {
      const rect = this.canvas.getBoundingClientRect();
      // Normalized X from -1 (far left) to 1 (far right) relative to window width
      const normX = (clientX / window.innerWidth) * 2 - 1;
      const normY = (clientY / window.innerHeight) * 2 - 1;

      if (!this.isDragging) {
        // Map cursor X to 360 degree rotation (from -PI to +PI)
        this.targetRotationY = normX * Math.PI * 1.25 + (Math.PI * 0.25);
        this.targetRotationX = THREE.MathUtils.clamp(normY * 0.12, -0.05, 0.25);
      }
    };

    window.addEventListener("mousemove", (e) => {
      onPointerMove(e.clientX, e.clientY);
    });

    // Touch support for mobile devices
    window.addEventListener("touchmove", (e) => {
      if (e.touches.length > 0) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    // 2. Direct Canvas Dragging (for free manual orbit)
    this.canvas.addEventListener("mousedown", (e) => {
      this.isDragging = true;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener("mouseup", () => {
      this.isDragging = false;
    });

    this.canvas.addEventListener("mousemove", (e) => {
      if (this.isDragging) {
        const deltaX = e.clientX - this.previousMousePosition.x;
        this.targetRotationY += deltaX * 0.01;
        this.previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    });

    // 3. UI Angle Scrub Slider
    const angleSlider = document.getElementById("angle-slider");
    if (angleSlider) {
      angleSlider.addEventListener("input", (e) => {
        const deg = parseFloat(e.target.value);
        this.targetRotationY = (deg * Math.PI) / 180;
      });
    }

    // 4. Color Swatches
    const colorSwatches = document.querySelectorAll(".color-dot");
    colorSwatches.forEach((dot) => {
      dot.addEventListener("click", () => {
        colorSwatches.forEach(d => d.classList.remove("active"));
        dot.classList.add("active");

        const colorName = dot.getAttribute("data-color");
        let hexColor = 0x8a0000;
        if (colorName === "black") hexColor = 0x0a0a0c;
        if (colorName === "ruby") hexColor = 0xd6182c;
        if (colorName === "carbon") hexColor = 0x222228;

        this.setCarColor(hexColor);
      });
    });

    // 5. Lights Toggle Button
    const lightBtn = document.getElementById("toggle-lights-btn");
    if (lightBtn) {
      lightBtn.addEventListener("click", () => {
        this.headlightsOn = !this.headlightsOn;
        lightBtn.classList.toggle("active", this.headlightsOn);
        this.headlightMats.forEach(m => {
          m.color.setHex(this.headlightsOn ? 0xffffff : 0x222222);
        });
        if (this.underglowLight) {
          this.underglowLight.intensity = this.headlightsOn ? 4 : 0.8;
        }
      });
    }

    // 6. Window Resize
    window.addEventListener("resize", () => this.onResize());
  }

  setCarColor(hexColor) {
    this.currentColor = hexColor;
    this.carMaterials.forEach(mat => {
      mat.color.setHex(hexColor);
    });
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  updateAngleUI(radians) {
    // Normalize to 0 - 360 degrees
    let deg = Math.round((radians * 180) / Math.PI) % 360;
    if (deg < 0) deg += 360;

    const angleValueDisplay = document.getElementById("angle-val");
    const angleNameDisplay = document.getElementById("angle-name");
    const angleSlider = document.getElementById("angle-slider");

    if (angleValueDisplay) angleValueDisplay.textContent = `${deg}°`;
    if (angleSlider && !this.isDragging) angleSlider.value = deg;

    if (angleNameDisplay) {
      if (deg >= 335 || deg < 25) angleNameDisplay.textContent = "FRONT VIEW";
      else if (deg >= 25 && deg < 70) angleNameDisplay.textContent = "FRONT-RIGHT 3/4";
      else if (deg >= 70 && deg < 115) angleNameDisplay.textContent = "RIGHT PROFILE";
      else if (deg >= 115 && deg < 160) angleNameDisplay.textContent = "REAR-RIGHT 3/4";
      else if (deg >= 160 && deg < 205) angleNameDisplay.textContent = "REAR VIEW";
      else if (deg >= 205 && deg < 250) angleNameDisplay.textContent = "REAR-LEFT 3/4";
      else if (deg >= 250 && deg < 295) angleNameDisplay.textContent = "LEFT PROFILE";
      else angleNameDisplay.textContent = "FRONT-LEFT 3/4";
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Silky smooth interpolation (Lerp) for realistic weight & 60fps dynamics
    this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.065;
    this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.05;

    if (this.carGroup) {
      this.carGroup.rotation.y = this.currentRotationY;
      this.carGroup.rotation.x = this.currentRotationX;
    }

    // Pulse underglow slightly
    if (this.underglowLight && this.headlightsOn) {
      this.underglowLight.intensity = 3.6 + Math.sin(Date.now() * 0.003) * 0.6;
    }

    this.updateAngleUI(this.currentRotationY);
    this.renderer.render(this.scene, this.camera);
  }
}

// Robust initialization
function startCarViewer() {
  if (typeof THREE !== "undefined" && document.getElementById("car-3d-canvas")) {
    if (!window.carViewer) {
      window.carViewer = new Car3DViewer("car-3d-canvas");
    }
  } else {
    setTimeout(startCarViewer, 100);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startCarViewer);
} else {
  startCarViewer();
}
