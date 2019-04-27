<template>
	<div :id="name" class="h-100 w-100">
	</div>
</template>

<script>
	export default {
		name: "Particles",
		props: {
			name: {
				required: true
			}
		},
		mounted() {
			particlesJS(this.name, {
				"particles": {
					"number": {
						"value": 400,
						"density": {
							"enable": true,
							"value_area": 1000
						}
					},
					"color": {
						"value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
					},
					"shape": {
						"type": "circle",
						"stroke": {
							"width": 0,
							"color": "#000000"
						},
						"polygon": {
							"nb_sides": 15
						}
					},
					"opacity": {
						"value": 1,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 1.5,
							"opacity_min": 1,
							"sync": false
						}
					},
					"size": {
						"value": 3,
						"random": false,
						"anim": {
							"enable": true,
							"speed": 2,
							"size_min": 1,
							"sync": false
						}
					},
					"line_linked": {
						"enable": true,
						"distance": 110,
						"color": "#33b1f8",
						"opacity": 0.25,
						"width": 1
					},
					"move": {
						"enable": true,
						"speed": 3,
						"direction": "none",
						"random": false,
						"straight": false,
						"out_mode": "out",
						"bounce": false,
						"attract": {
							"enable": false,
							"rotateX": 600,
							"rotateY": 1200
						}
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": true,
							"mode": "bubble"
						},
						"onclick": {
							"enable": true,
							"mode": "repulse"
						},
						"resize": true
					},
					"modes": {
						"grab": {
							"distance": 400,
							"line_linked": {
								"opacity": 1
							}
						},
						"bubble": {
							"distance": 300,
							"size": 10,
							"duration": 2,
							"opacity": 8,
							"speed": 3
						},
						"repulse": {
							"distance": 120,
							"duration": 0.4
						},
						"push": {
							"particles_nb": 4
						},
						"remove": {
							"particles_nb": 2
						}
					}
				},
				"retina_detect": true
			});
		}
	}
</script>