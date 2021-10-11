import { Component, OnInit } from '@angular/core';
import { Painting } from '../painting';

@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo.component.html',
    styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

    constructor() { }

    private currentNumCols: number = 0;
    private actualWidth: number = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    public paintings: Painting[] = [
        { picUrl: "../../assets/images/paintings/abuelo_vino.jpg", picWidth: 1080, picHeight: 1349, title: "El bodeguero aireando el mosto" },
        { picUrl: "../../assets/images/paintings/boinas.jpg", picWidth: 1080, picHeight: 1345, title: "Boinas en la plaza de Tomelloso" },
        { picUrl: "../../assets/images/paintings/descanso.jpg", picWidth: 1080, picHeight: 1346, title: "Descanso para la comida" },
        { picUrl: "../../assets/images/paintings/familia.jpg", picWidth: 1080, picHeight: 848, title: "Familia vendimiando" },
        { picUrl: "../../assets/images/paintings/home_splash_background.jpg", picWidth: 1080, picHeight: 864, title: "Los gitanillos de Íllora se van de cuadrilla de vendimia" },
        { picUrl: "../../assets/images/paintings/inundo.jpg", picWidth: 1080, picHeight: 892, title: "Se me inundó el estudio" },
        { picUrl: "../../assets/images/paintings/jota.jpg", picWidth: 1080, picHeight: 856, title: "La jota de la sartén" },
        { picUrl: "../../assets/images/paintings/pareja.jpg", picWidth: 1080, picHeight: 1355, title: "Los padres de Jonathan Víctor" },
        { picUrl: "../../assets/images/paintings/pintor_paisaje.jpg", picWidth: 1080, picHeight: 774, title: "Paisaje manchego con manchego incrustado" },
        { picUrl: "../../assets/images/paintings/Reata_de_mulas.jpg", picWidth: 1080, picHeight: 889, title: "Reata de mulas" },
        { picUrl: "../../assets/images/paintings/silos.jpg", picWidth: 1080, picHeight: 908, title: "Comprobación del grado de la uva en depósito industrial" },
        { picUrl: "../../assets/images/paintings/teatro_cervantes.jpg", picWidth: 1080, picHeight: 673, title: "El antiguo Teatro Cervantes de la calle el Charco" },
        { picUrl: "../../assets/images/paintings/terreras.jpg", picWidth: 1080, picHeight: 1335, title: "Las terreras" },
        { picUrl: "../../assets/images/paintings/tientas.jpg", picWidth: 1080, picHeight: 1073, title: "Pa’ qué me tientas" },
        { picUrl: "../../assets/images/paintings/tomasa.jpg", picWidth: 1080, picHeight: 898, title: "Tomasa vendimiando" },
        { picUrl: "../../assets/images/paintings/tractor.jpg", picWidth: 1080, picHeight: 890, title: "Remolque cargado en plena vendimia" },
        { picUrl: "../../assets/images/paintings/valencia_1.jpg", picWidth: 1080, picHeight: 850, title: "Paisaje de Valencia I" },
        { picUrl: "../../assets/images/paintings/valencia_2.jpg", picWidth: 1080, picHeight: 684, title: "Paisaje de Valencia II" },
    ];

    public murals: Painting[] = [
        { picUrl: "../../assets/images/murals/bacin-2.webp", picWidth: 1080, picHeight: 1073, title: "Bacín 2" },
        { picUrl: "../../assets/images/murals/bacin-3.webp", picWidth: 1080, picHeight: 1069, title: "Bacín 3" },
        { picUrl: "../../assets/images/murals/bacin-4.webp", picWidth: 1080, picHeight: 1069, title: "Bacín 4" },
        { picUrl: "../../assets/images/murals/bacin.webp", picWidth: 1080, picHeight: 1075, title: "Bacín" },
        { picUrl: "../../assets/images/murals/bodegon-manchego.webp", picWidth: 1080, picHeight: 978, title: "Bodegón manchego" },
        { picUrl: "../../assets/images/murals/centro-joven-valdepenas-2.webp", picWidth: 1080, picHeight: 1078, title: "Centro joven de Valdepeñas 2" },
        { picUrl: "../../assets/images/murals/centro-joven-valdepenas-3.webp", picWidth: 1080, picHeight: 1079, title: "Centro joven de Valdepeñas 3" },
        { picUrl: "../../assets/images/murals/centro-joven-valdepenas-4.webp", picWidth: 1080, picHeight: 1077, title: "Centro joven de Valdepeñas 4" },
        { picUrl: "../../assets/images/murals/centro-joven-valdepenas.webp", picWidth: 1080, picHeight: 1075, title: "Centro joven de Valdepeñas" },
        { picUrl: "../../assets/images/murals/estampa-costumbrista-de-una-familia-manchega-en-los-70.webp", picWidth: 1080, picHeight: 1077, title: "Estampa costumbrista de una familia manchega en los 70" },
        { picUrl: "../../assets/images/murals/gente-de-boina.webp", picWidth:1080 , picHeight: 1075, title: "Gente de boina" },
        { picUrl: "../../assets/images/murals/historia-en-tomelloso-2.webp", picWidth:1080 , picHeight: 1070, title: "Historia en Tomelloso 2" },
        { picUrl: "../../assets/images/murals/historia-en-tomelloso-3.webp", picWidth: 1080, picHeight: 1072, title: "Historia en Tomelloso 3" },
        { picUrl: "../../assets/images/murals/historia-en-tomelloso-4.webp", picWidth: 1080, picHeight: 1077, title: "Historia en Tomelloso 4" },
        { picUrl: "../../assets/images/murals/historia-en-tomelloso-5.webp", picWidth:1080, picHeight: 1076, title: "Historia en Tomelloso 5" },
        { picUrl: "../../assets/images/murals/historia-en-tomelloso.webp", picWidth: 1080, picHeight: 1068, title: "Historia en Tomelloso" },
        { picUrl: "../../assets/images/murals/homenaje-a-la-mujer-manchega.webp", picWidth:1080, picHeight: 846, title: "Homenaje a la mujer manchega" },
        { picUrl: "../../assets/images/murals/la-dorotea.webp", picWidth: 1080, picHeight: 859, title: "La Dorotea" },
        { picUrl: "../../assets/images/murals/la-muchacha-extremena.webp", picWidth:1080, picHeight: 1078, title: "La muchacha extremeña" },
        { picUrl: "../../assets/images/murals/la-tomellosera-2.webp", picWidth: 1080, picHeight: 1073, title: "La tomellosera 2" },
        { picUrl: "../../assets/images/murals/la-tomellosera-3.webp", picWidth: 1080, picHeight: 956, title: "La tomellosera 3" },
        { picUrl: "../../assets/images/murals/la-tomellosera-4.webp", picWidth: 1080, picHeight: 1077, title: "La tomellosera 4" },
        { picUrl: "../../assets/images/murals/la-tomellosera.webp", picWidth: 1080, picHeight: 1078, title: "La tomellosera" },
        { picUrl: "../../assets/images/murals/las-cuatrillizas-de-socuellamos.webp", picWidth: 1080, picHeight: 1072, title: "Las cuatrillizas de socuéllamos" },
        { picUrl: "../../assets/images/murals/manchega-azafranera.webp", picWidth: 1080, picHeight: 1077, title: "Manchega azafranera" },
        { picUrl: "../../assets/images/murals/mi-bisabuelo-jesus-y-su-vecino-el-pelao.webp", picWidth: 1080, picHeight: 1077, title: "Mi bisabuelo Jesús y su vecino \"El Pelao\"" },
        { picUrl: "../../assets/images/murals/muchachejos.webp", picWidth: 1080, picHeight: 1072, title: "Muchachejos" },
        { picUrl: "../../assets/images/murals/mujeres-ossenas-sobre-jota-del-garrote.webp", picWidth: 1080, picHeight: 1079, title: "Mujeres osseñas sobre jota del garrote" },
        { picUrl: "../../assets/images/murals/recuerdos-por-valdepenas-2.webp", picWidth: 1080, picHeight: 1078, title: "Recuerdos por Valdepeñas 2" },
        { picUrl: "../../assets/images/murals/recuerdos-por-valdepenas-3.webp", picWidth: 1080, picHeight: 1080, title: "Recuerdos por Valdepeñas 3" },
        { picUrl: "../../assets/images/murals/recuerdos-por-valdepenas-4.webp", picWidth: 1080, picHeight: 1074, title: "Recuerdos por Valdepeñas 4" },
        { picUrl: "../../assets/images/murals/recuerdos-por-valdepenas.webp", picWidth: 1080, picHeight: 1073, title: "Recuerdos por Valdepeñas" },
        { picUrl: "../../assets/images/murals/huevos-fritos-con-puntilla-a-la-manchega-de-sara-montiel-1.webp", picWidth: 2312, picHeight: 3083, title: "Huevos fritos con puntilla a la manchega de Sara Montiel 1" },
        { picUrl: "../../assets/images/murals/huevos-fritos-con-puntilla-a-la-manchega-de-sara-montiel-2.webp", picWidth: 2312, picHeight: 3083, title: "Huevos fritos con puntilla a la manchega de Sara Montiel 2" }
    ];
    // public currentContents: Painting[] = this.paintings;
    public currentContents: Painting[] = this.paintings;
    public changeContentMurals: string = "Ver murales";
    public changeContentPaintings: string = "Ver cuadros";



    public paintingCols: Painting[][];
    ngOnInit(): void {

        // store the current number of cols to populate
        this.currentNumCols = this.getNumCols();
        // Fill cols with paintings
        this.setCols();
        



    }
    ngAfterViewInit() {
        // checks if we need to reorganize paintings
        window.onresize = () => {
            let numCols: number = this.getNumCols();
            if (numCols !== this.currentNumCols) {
                this.setCols();
                //console.log("need to repopulate");
                this.currentNumCols = numCols;
            }

            // set image preview container size
            this.setBigImageSize();
        }

        // set these value for the first time as well,
        // because when the website loads the onresize event
        // hasn't been executed yet
        this.setBigImageSize();
        
    }

    setBigImageSize(): void {
        let size: number = Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight);
        let imageContainer: HTMLElement = document.querySelector("#big-image-container");
        imageContainer.style.width = (size * 0.90) + "px";
        imageContainer.style.height = (size * 0.90) + "px";
    }

    // sets the appropriate number of cols and populates them
    setCols(): void {
        let numCols: number = this.getNumCols();

        // populate cols
        this.paintingCols = [[], [], []];
        for (let i = 0, col = 0; i < this.currentContents.length; i++) {
            this.paintingCols[col].push(this.currentContents[i]);
            col = (col + 1) % numCols;
        }

        //console.log("redistributed paintings", this.paintingCols);

    }

    // gets the number of colums that we're going to display
    getNumCols(): number {
        let width: number = document.documentElement.clientWidth || window.innerWidth;
        let numCols: number = 3;
        if (width > 900) {
            numCols = 3;
        } else if (width <= 900 && width > 763) {
            numCols = 2;
        } else {
            numCols = 1;
        }

        return numCols;
    }

    displayPainting(painting: Painting): void {
        //console.log("showing picture", painting);
        let cover: HTMLElement = document.querySelector("#big-picture-cover");
        let image: HTMLImageElement = document.querySelector("#big-image");
        cover.classList.add("show");
        image.src = painting.picUrl;
    }

    hidePainting(target: HTMLElement) {
        let cover: HTMLElement = document.querySelector("#big-picture-cover");
        let bigImage: HTMLElement = document.querySelector("#big-image");
        if (target !== bigImage) {
            cover.classList.remove("show");
        }
        //console.log(target);

    }

    changeSection(button: HTMLElement) {
        if(button.textContent == this.changeContentMurals) {
            this.currentContents = this.murals;
            button.textContent = this.changeContentPaintings;
        } else {
            this.currentContents = this.paintings;
            button.textContent = this.changeContentMurals;
            
        }
        this.setCols();
        this.changeSelectionAnim();
    }

    toggleChangeSectionUnderline(event: MouseEvent) {
        let button: HTMLElement = document.querySelector("#change-section span");
        let underline: HTMLElement = document.querySelector("#change-section .section-underline");
        
        if(event.type == "mouseenter") {
            underline.style.width = button.clientWidth + "px";
        } else {
            underline.style.width = "0px";
        }  
    } 

    changeSelectionAnim() {
        let button: HTMLElement = document.querySelector("#change-section span");
        let underline: HTMLElement = document.querySelector("#change-section .section-underline");
        button.style.transition = "all 0.3s ease";
        button.style.transform = "translate(500px,0px)";
        button.style.opacity = "0";
        underline.style.width = "0px";
        setTimeout(()=>{
            button.style.transition = "none";
            button.style.transform = "translate(0px,0px)";
            setTimeout(()=>{
                button.style.transition = "all 0.3s ease";
                button.style.opacity = "1";
            }, 200);
        },300);
    }
}
