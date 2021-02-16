let screen = 'menu'

function preload(){
	wallpaper = loadImage("assets/img/landscape.jpg")
	menuimage = loadImage("assets/img/menu.jpg")
}

function setup(){
	
	createCanvas(800,600)
}

function draw(){

	// Reset all canvas elements 
	background('white')
	removeElements()

	switch(screen){

		case 'menu':
			menu()
			break;

		case 'game':
			game()
			break;
	}
}

function menu(){

	screen = 'menu'

	image(menuimage,300,60,400,300)

	textSize(40)
	textAlign(CENTER)
	text('MÉDIA NA PRÁTICA',250,200)

	rect(168,250,130,80)

	textSize(35)
	text("Aperte ENTER para jogar", 260, 300)

	textSize(12)
	text("Desenvolvido por Raphael Ramos, aluno de CeT - UFRN", 400, 560)
	
}

function game(){

	background(wallpaper)

	helpb = createButton('? Ajuda')
	helpb.position(740, 580)
	helpb.mousePressed(help)

}

function help(){

	textSize(20)
	text("Como jogar esse jogo",200,200)

	/*
		"Como jogar esse jogo?  
		"Saindo do jogo: aperte ESC para voltar para a tela de menu \n" +
		"Calculando a média e desvio padrão: digite a altura de cada bloco (em centímetros), clique em Adicionar e depois Calcular"
	*/
}

function keyPressed(){

	// General shortcuts

	if(key == 'Enter'){
		screen = 'game'
	}

	if(key == 'Escape'){
		screen = 'menu'
	}

}
