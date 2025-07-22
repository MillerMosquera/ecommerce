import { useParams } from "react-router-dom";
import Plp from "../components/accesorios/layout/Plp";

export default function WrapCategories(props) {
    const { subcategoria } = useParams();
    console.log('subcategoria', subcategoria)
    return (
        <div className="text-black p-4">
            <Plp title={props.title} subcategoria={subcategoria} />
        </div>
    );
}