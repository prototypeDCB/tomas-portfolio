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
    public paintingAtributes: Painting[] = [
        { picUrl: "../../assets/images/abuelo_vino.jpg", picWidth: 1080, picHeight: 1349, title: "El bodeguero aireando el mosto" },
        { picUrl: "../../assets/images/boinas.jpg", picWidth: 1080, picHeight: 1345, title: "Boinas en la plaza de Tomelloso" },
        { picUrl: "../../assets/images/descanso.jpg", picWidth: 1080, picHeight: 1346, title: "Descanso para la comida" },
        { picUrl: "../../assets/images/familia.jpg", picWidth: 1080, picHeight: 848, title: "Familia vendimiando" },
        { picUrl: "../../assets/images/home_splash_background.jpg", picWidth: 1080, picHeight: 864, title: "Los gitanillos de Íllora se van de cuadrilla de vendimia" },
        { picUrl: "../../assets/images/inundo.jpg", picWidth: 1080, picHeight: 892, title: "Se me inundó el estudio" },
        { picUrl: "../../assets/images/jota.jpg", picWidth: 1080, picHeight: 856, title: "La jota de la sartén" },
        { picUrl: "../../assets/images/pareja.jpg", picWidth: 1080, picHeight: 1355, title: "Los padres de Jonathan Víctor" },
        { picUrl: "../../assets/images/pintor_paisaje.jpg", picWidth: 1080, picHeight: 774, title: "Paisaje manchego con manchego incrustado" },
        { picUrl: "../../assets/images/Reata_de_mulas.jpg", picWidth: 1080, picHeight: 889, title: "Reata de mulas" },
        { picUrl: "../../assets/images/silos.jpg", picWidth: 1080, picHeight: 908, title: "Comprobación del grado de la uva en depósito industrial" },
        { picUrl: "../../assets/images/teatro_cervantes.jpg", picWidth: 1080, picHeight: 673, title: "El antiguo Teatro Cervantes de la calle el Charco" },
        { picUrl: "../../assets/images/terreras.jpg", picWidth: 1080, picHeight: 1335, title: "Las terreras" },
        { picUrl: "../../assets/images/tientas.jpg", picWidth: 1080, picHeight: 1073, title: "Pa’ qué me tientas" },
        { picUrl: "../../assets/images/tomasa.jpg", picWidth: 1080, picHeight: 898, title: "Tomasa vendimiando" },
        { picUrl: "../../assets/images/tractor.jpg", picWidth: 1080, picHeight: 890, title: "Remolque cargado en plena vendimia" },
        { picUrl: "../../assets/images/valencia_1.jpg", picWidth: 1080, picHeight: 850, title: "Paisaje de Valencia I" },
        { picUrl: "../../assets/images/valencia_2.jpg", picWidth: 1080, picHeight: 684, title: "Paisaje de Valencia II" },
    ];

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
                console.log("need to repopulate");
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
        for (let i = 0, col = 0; i < this.paintingAtributes.length; i++) {
            this.paintingCols[col].push(this.paintingAtributes[i]);
            col = (col + 1) % numCols;
        }

        console.log("redistributed paintings", this.paintingCols);

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
        console.log("showing picture", painting);
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
        console.log(target);

    }

}
