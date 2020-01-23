export interface BookInterface { // Interfaz necesaria para poder trabajar en nuestro modal para crear y actualizar libros.
    titulo?: string;
    idioma?: string;
    descripcion?: string;
    portada?: string;
    precio?: string;
    link_amazon?: string;
    autor?: string;
    oferta?: string;
    id?: string;
    userUid?: string;
}