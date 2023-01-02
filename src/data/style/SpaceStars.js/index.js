import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useDebounce from '../../../hooks/useDebounce';
// import useDebounce from '../../hooks/useDebounce';

const SpaceStars = () => {
	const starsCanvas = useRef(null);
	const milkyWayCanvas = useRef(null);
	var dpr = window.devicePixelRatio || 1;
	const { innerWidth, innerHeight } = window;
	const [canvas, setCanvas] = useState(starsCanvas.current);

	// constants for the behavior of the model
	const sNumber = 600; // number of Stars
	const sSize = 0.3; // minimum size of Star
	const sSizeR = 0.6; // randomness of the size of Stars
	const sAlphaR = 0.5; // randomness of alpha for stars
	const sMaxHueProportion = 0.6; // max proportion of displayed base hue
	// Shooting stars parameters
	const shootingStarDensity = 0.01;
	const shootingStarBaseXspeed = 30;
	const shootingStarBaseYspeed = 15;
	const shootingStarBaseLength = 8;
	const shootingStarBaseLifespan = 60;
	// Shooting star colors
	const shootingStarsColors = [
		'#a1ffba', // greenish
		'#a1d2ff', // blueish
		'#fffaa1', // yellowish
		'#ffa1a1', // redish
	];
	// milky way constants
	const mwStarCount = 100000; // amount of static stars not clustered in the milky way
	const mwRandomStarProp = 0.2; // proportion of stars completely random in the milky way
	const mwClusterCount = 300; // amount of clusters in the milky way
	const mwClusterStarCount = 1500; // amount of stars per cluster
	const mwClusterSize = 120; // minimum size of a cluster
	const mwClusterSizeR = 80; // randomness of the size of a cluster
	const mwClusterLayers = 10; // amount of layers per cluster to draw
	const mwAngle = 0.6; // to incline the milky way (0 is horizontal, tend to infinite to get vertical)
	const mwHueMin = 150; // min hue for a cluster (150 is green)
	const mwHueMax = 300; // max hue for a cluster (300 is pink)
	const mwWhiteProportionMin = 50; // minimum base percentage of white in cluster hue
	const mwWhiteProportionMax = 65; // maximum base percentage of white in cluster hue

	// array containing random numbers
	let randomArray;
	const randomArrayLength = 1000;
	let randomArrayIterator = 0;
	// array containing random hues
	let hueArray;
	const hueArrayLength = 1000;
	// arrays containing all Stars
	let StarsArray;
	let ShootingStarsArray;
	// setCanvas();
	// // getting canvases with native resolution
	useEffect(() => {
		// To ensure we use native resolution of screen
		const canvas = starsCanvas.current;
		const ctx = canvas.getContext('2d');

		canvas.width = window.innerWidth * dpr;
		canvas.height = window.innerHeight * dpr;
		ctx.scale(dpr, dpr); // to scale every drawing operations

		const canvasMw = milkyWayCanvas.current;
		canvasMw.width = window.innerWidth * dpr;
		canvasMw.height = window.innerHeight * dpr;
		const ctxMw = canvasMw.getContext('2d');
		ctxMw.scale(dpr, dpr); // to scale every drawing operations

		// Star creation
		class Star {
			constructor(x, y, size) {
				this.x = x;
				this.y = y;
				this.size = size;
				this.alpha = size / (sSize + sSizeR);
				this.baseHue = hueArray[Math.floor(Math.random() * hueArrayLength)];
				this.baseHueProportion = Math.random();
				this.randomIndexa = Math.floor(Math.random() * randomArrayLength);
				this.randomIndexh = this.randomIndexa;
				this.randomValue = randomArray[this.randomIndexa];
			}
			// method to draw each Star
			draw() {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
				let rAlpha =
					this.alpha + Math.min((this.randomValue - 0.5) * sAlphaR, 1); // random alpha for the shimmering
				let rHue =
					randomArray[this.randomIndexh] > this.baseHueProportion
						? hueArray[this.randomIndexa]
						: this.baseHue; // random hue or base hue
				this.color = 'hsla(' + rHue + ',100%,85%,' + rAlpha + ')';
				ctx.fillStyle = this.color;
				ctx.fill();
			}
			// method to check position of Star
			update() {
				this.randomIndexh = this.randomIndexa;
				this.randomIndexa =
					this.randomIndexa >= 999 ? 0 : this.randomIndexa + 1;
				this.randomValue = randomArray[this.randomIndexa];
				// draw Star
				this.draw();
			}
		}

		// Shooting Star creation
		class ShootingStar {
			constructor(x, y, speedX, speedY, color) {
				this.x = x;
				this.y = y;
				this.speedX = speedX;
				this.speedY = speedY;
				this.framesLeft = shootingStarBaseLifespan;
				this.color = color;
			}

			// method to know if the star will be dead on next draw
			goingOut() {
				return this.framesLeft <= 0;
			}
			// method to get the modifier based on the age of the shooting star
			// when freshly born or close to die the length and brightness are reduced
			ageModifier() {
				let halfLife = shootingStarBaseLifespan / 2.0;
				return Math.pow(
					1.0 - Math.abs(this.framesLeft - halfLife) / halfLife,
					2
				);
			}

			// method to draw each Star
			draw() {
				let am = this.ageModifier();
				let endX = this.x - this.speedX * shootingStarBaseLength * am;
				let endY = this.y - this.speedY * shootingStarBaseLength * am;
				// linear gradient for the color of the shooting star
				let gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
				gradient.addColorStop(0, '#fff'); // brigth a the start
				gradient.addColorStop(Math.min(am, 0.7), this.color); // colored in the middle
				gradient.addColorStop(1, 'rgba(0,0,0,0)'); // dim a the end

				// drawing
				ctx.strokeStyle = gradient;
				ctx.beginPath();
				ctx.moveTo(this.x, this.y);
				ctx.lineTo(endX, endY);
				ctx.stroke();
			}
			// method to check position of Star
			update() {
				this.framesLeft--;
				this.x += this.speedX;
				this.y += this.speedY;
				// draw Star
				this.draw();
			}
		}

		// star cluster in the milky way
		class MwStarCluster {
			constructor(x, y, size, hue, baseWhiteProportion, brigthnessModifier) {
				this.x = x;
				this.y = y;
				this.size = size;
				this.hue = hue;
				this.baseWhiteProportion = baseWhiteProportion;
				this.brigthnessModifier = brigthnessModifier;
			}

			draw() {
				let starsPerLayer = Math.floor(mwClusterStarCount / mwClusterLayers);
				for (let layer = 1; layer < mwClusterLayers; layer++) {
					let layerRadius = (this.size * layer) / mwClusterLayers;
					for (let i = 1; i < starsPerLayer; i++) {
						let posX = this.x + 2 * layerRadius * (Math.random() - 0.5);
						let posY =
							this.y +
							2 *
								Math.sqrt(
									Math.pow(layerRadius, 2) - Math.pow(this.x - posX, 2)
								) *
								(Math.random() - 0.5);
						let size = 0.05 + Math.random() * 0.15;
						let alpha = 0.3 + Math.random() * 0.4;
						let whitePercentage =
							this.baseWhiteProportion +
							15 +
							15 * this.brigthnessModifier +
							Math.floor(Math.random() * 10);
						ctxMw.beginPath();
						ctxMw.arc(posX, posY, size, 0, Math.PI * 2, false);
						ctxMw.fillStyle =
							'hsla(' +
							this.hue +
							',100%,' +
							whitePercentage +
							'%,' +
							alpha +
							')'; // 290 deg is pinkish color
						ctxMw.fill();
					}
				}
				// adding an extra gradient
				let gradient = ctx.createRadialGradient(
					this.x,
					this.y,
					0,
					this.x,
					this.y,
					this.size
				);
				gradient.addColorStop(
					0,
					'hsla(' + this.hue + ',100%,' + this.baseWhiteProportion + '%,0.002)'
				); // dim center
				gradient.addColorStop(
					0.25,
					'hsla(' +
						this.hue +
						',100%,' +
						(this.baseWhiteProportion + 30) +
						'%,' +
						(0.01 + 0.01 * this.brigthnessModifier) +
						')'
				); // brigth around center
				gradient.addColorStop(
					0.4,
					'hsla(' +
						this.hue +
						',100%,' +
						(this.baseWhiteProportion + 15) +
						'%,0.005)'
				); // colored in the middle
				gradient.addColorStop(1, 'rgba(0,0,0,0)'); // dim a the end
				ctxMw.beginPath();
				ctxMw.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
				ctxMw.fillStyle = gradient;
				ctxMw.fill();
			}
		}

		// create Star array, positions are randomized
		function init() {
			// init random array
			randomArray = [];
			for (let i = 0; i < randomArrayLength; i++) {
				randomArray[i] = Math.random();
			}
			// init hueArray
			hueArray = [];
			for (let i = 0; i < hueArrayLength; i++) {
				// Determining a star hue, ranges from 0 to 60 then 170 to 270 (basically all but green and pink)
				let rHue = Math.floor(Math.random() * 160); // usually hue ranges from 0 to 360 but using only 0 to 160 because of next line
				if (rHue > 60) rHue += 110; // to avoid greenish looking stars (hue from 60 to 170), feels unnatural
				hueArray[i] = rHue;
			}

			StarsArray = [];
			for (let i = 0; i < sNumber; i++) {
				let size = Math.random() * sSizeR + sSize;
				let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
				let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;

				StarsArray.push(new Star(x, y, size));
			}

			ShootingStarsArray = [];

			DrawMilkyWayCanvas();
		}

		// animation
		function animate() {
			requestAnimationFrame(animate);

			ctx.clearRect(0, 0, innerWidth, innerHeight);

			for (let i = 0; i < StarsArray.length; i++) {
				StarsArray[i].update();
			}

			// pushing a new shooting star randomly
			if (randomArray[randomArrayIterator] < shootingStarDensity) {
				let posX = Math.floor(Math.random() * canvas.width); // will appear anywhere from left to right
				let posY = Math.floor(Math.random() * 150); // will appear anywhere from top to 150px from top
				let speedX = Math.floor((Math.random() - 0.5) * shootingStarBaseXspeed); // will go anywhere left or right
				let speedY = Math.floor(Math.random() * shootingStarBaseYspeed); // will go down
				let color =
					shootingStarsColors[
						Math.floor(Math.random() * shootingStarsColors.length)
					];
				ShootingStarsArray.push(
					new ShootingStar(posX, posY, speedX, speedY, color)
				);
			}

			// removing out of frame or dead shooting stars
			let arrayIterator = ShootingStarsArray.length - 1;
			while (arrayIterator >= 0) {
				if (ShootingStarsArray[arrayIterator].goingOut() == true) {
					ShootingStarsArray.splice(arrayIterator, 1);
				} else {
					ShootingStarsArray[arrayIterator].update();
				}
				arrayIterator--;
			}

			// moving through random array
			if (randomArrayIterator + 1 >= randomArrayLength) {
				randomArrayIterator = 0;
			} else {
				randomArrayIterator++;
			}
		}

		// to get x position of a star or cluster in the milky way
		function MilkyWayX() {
			return Math.floor(Math.random() * innerWidth);
		}

		// to get y position of a star or cluster in the milky way depending on x position
		function MilkyWayYFromX(xPos, mode) {
			let offset = (innerWidth / 2 - xPos) * mwAngle;
			if (mode == 'star') {
				return (
					Math.floor(
						Math.pow(Math.random(), 1.2) * innerHeight * (Math.random() - 0.5) +
							innerHeight / 2 +
							(Math.random() - 0.5) * 100
					) + offset
				);
			} else {
				return (
					Math.floor(
						Math.pow(Math.random(), 1.5) *
							innerHeight *
							0.6 *
							(Math.random() - 0.5) +
							innerHeight / 2 +
							(Math.random() - 0.5) * 100
					) + offset
				);
			}
		}

		// To draw the milkyWay
		function DrawMilkyWayCanvas() {
			// at first we draw unclustered stars
			for (let i = 0; i < mwStarCount; i++) {
				ctxMw.beginPath();
				let xPos = MilkyWayX();
				let yPos =
					Math.random() < mwRandomStarProp
						? Math.floor(Math.random() * innerHeight)
						: MilkyWayYFromX(xPos, 'star');
				let size = Math.random() * 0.27;
				ctxMw.arc(xPos, yPos, size, 0, Math.PI * 2, false);
				let alpha = 0.4 + Math.random() * 0.6;
				ctxMw.fillStyle = 'hsla(0,100%,100%,' + alpha + ')';
				ctxMw.fill();
			}
			// now we draw clusters
			for (let i = 0; i < mwClusterCount; i++) {
				let xPos = MilkyWayX();
				let yPos = MilkyWayYFromX(xPos, 'cluster');
				// modifier using position of the cluster, a value of 1 is at the center, 0 is on the side
				let distToCenter =
					(1 - Math.abs(xPos - innerWidth / 2) / (innerWidth / 2)) *
					(1 - Math.abs(yPos - innerHeight / 2) / (innerHeight / 2));
				let size = mwClusterSize + Math.random() * mwClusterSizeR;
				// the hue is not the same depending on how close the cluster is to the center, half of the modifier value depends on it
				let hue =
					mwHueMin +
					Math.floor(
						(Math.random() * 0.5 + distToCenter * 0.5) * (mwHueMax - mwHueMin)
					);
				let baseWhiteProportion =
					mwWhiteProportionMin +
					Math.random() * (mwWhiteProportionMax - mwWhiteProportionMin);
				new MwStarCluster(
					xPos,
					yPos,
					size,
					hue,
					baseWhiteProportion,
					distToCenter
				).draw();
			}
		}

		// now we play
		init();
		animate();
	}, [canvas]);

	const handleDebounce = useDebounce(() => handleResizeWindow(), 100);

	const handleResizeWindow = () => {
		setCanvas({
			width: innerWidth * dpr,
			height: innerHeight * dpr,
		});
	};
	useEffect(() => {
		// subscribe to window resize event "onComponentDidMount"
		window.addEventListener('resize', handleDebounce);
		return () => {
			// unsubscribe "onComponentDestroy"
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);

	return (
		<StyledSpaceStars>
			<canvas id='backgroundCanvas'></canvas>
			<canvas ref={starsCanvas} id='starsCanvas'></canvas>
			<canvas ref={milkyWayCanvas} id='milkyWayCanvas'></canvas>
		</StyledSpaceStars>
	);
};

export default SpaceStars;

const StyledSpaceStars = styled.div`
	position: absolute;
	height: 100vh;
	width: 100vw;
	#backgroundCanvas {
		top: 0;
		left: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: contain;
		overflow: hidden;
		z-index: 1;
		background: radial-gradient(#100826, #060212);
	}
	#starsCanvas {
		top: 0;
		left: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: contain;
		overflow: hidden;
		z-index: 2;
		background-color: transparent;
	}
	#milkyWayCanvas {
		top: 0;
		left: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: transparent;
		object-fit: contain;
		overflow: hidden;
		z-index: 1;
		filter: blur(0px);
	}
`;
