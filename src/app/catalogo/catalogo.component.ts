import { Component, OnInit } from '@angular/core';
import { Painting } from '../painting';

@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo.component.html',
    styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

    constructor() { }

    // Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    private actualWidth: number = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    public paintingAtributes: Painting[] = [
        {picUrl: "../../assets/images/abuelo_vino.jpg", picWidth: 1080, picHeight: 1349, title: "El bodeguero aireando el mosto"},
        {picUrl: "../../assets/images/boinas.jpg", picWidth: 1080, picHeight: 1345, title: "Boinas en la plaza de Tomelloso"},
        {picUrl: "../../assets/images/descanso.jpg", picWidth: 1080, picHeight: 1346, title: "Descanso para la comida"},
        {picUrl: "../../assets/images/familia.jpg", picWidth: 1080, picHeight: 848, title: "Familia vendimiando"},
        {picUrl: "../../assets/images/home_splash_background.jpg", picWidth: 1080, picHeight: 864, title: "Los gitanillos de Íllora se van de cuadrilla de vendimia"},
        {picUrl: "../../assets/images/inundo.jpg", picWidth: 1080, picHeight: 892, title: "Se me inundó el estudio"},
        {picUrl: "../../assets/images/jota.jpg", picWidth: 1080, picHeight: 856, title: "La jota de la sartén"},
        {picUrl: "../../assets/images/pareja.jpg", picWidth: 1080, picHeight: 1355, title: "Los padres de Jonathan Víctor"},
        {picUrl: "../../assets/images/pintor_paisaje.jpg", picWidth: 1080, picHeight: 774, title: "Paisaje manchego con manchego incrustado"},
        {picUrl: "../../assets/images/Reata_de_mulas.jpg", picWidth: 1080, picHeight: 889, title: "Reata de mulas"},
        {picUrl: "../../assets/images/silos.jpg", picWidth: 1080, picHeight: 908, title: "Comprobación del grado de la uva en depósito industrial"},
        {picUrl: "../../assets/images/teatro_cervantes.jpg", picWidth: 1080, picHeight: 673, title: "El antiguo Teatro Cervantes de la calle el Charco"},
        {picUrl: "../../assets/images/terreras.jpg", picWidth: 1080, picHeight: 1335, title: "Las terreras"},
        {picUrl: "../../assets/images/tientas.jpg", picWidth: 1080, picHeight: 1073, title: "Pa’ qué me tientas"},
        {picUrl: "../../assets/images/tomasa.jpg", picWidth: 1080, picHeight: 898, title: "Tomasa vendimiando"},
        {picUrl: "../../assets/images/tractor.jpg", picWidth: 1080, picHeight: 890, title: "Remolque cargado en plena vendimia"},
        {picUrl: "../../assets/images/valencia_1.jpg", picWidth: 1080, picHeight: 850, title: "Paisaje de Valencia I"},
        {picUrl: "../../assets/images/valencia_2.jpg", picWidth: 1080, picHeight: 684, title: "Paisaje de Valencia II"},
    ];

    public paintingCols: Painting[][];
    private col1Paintings: Painting[];
    private col2Paintings: Painting[];
    private col3Paintings: Painting[];
    ngOnInit(): void {

        // Fill cols with paintings
        this.paintingCols = [ [],[],[] ];
        for(let i = 0, col = 0; i < this.paintingAtributes.length; i++) {
            this.paintingCols[col].push(this.paintingAtributes[i]);
            col = (col + 1) % 3;
        }


        window.onresize = function() {
            let paintings: NodeList = document.querySelectorAll(".painting");
            for(let i = 0; i < paintings.length; i++) {
                let element:HTMLElement= paintings[i] as HTMLElement;
                element.style.width;
                
            }

        }
    }

}
