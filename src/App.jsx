import "./App.scss"

import Paragraph from "./components/Paragraph/Paragraph"
import Picture from "./components/Picture/Picture"
import Button from "./components/Button/Button"

export default function App() {
    return (
        <div className="app">

            <div className="colors">
                <h2>Colores</h2>

                <ul>
                    <li className="colors__primary">$c-primary</li>
                    <li className="colors__secondary">$c-secondary</li>
                    <li className="colors__white">$c-white</li>
                    <li className="colors__black">$c-black</li>
                </ul>
            </div>

            <Paragraph className="m-test__p" text="Párrafo lorem ipsum dolor amet" />

            <Picture src_mobile="//unsplash.it/768/600" src_desktop="//unsplash.it/1200/600" alt="" />

            <Button className="btn--primary" text="Botón primario" />
            <Button className="btn--secondary" text="Botón secundario" />
        </div>
    );
}