import "./App.scss"

import Paragraph from "./components/Paragraph/Paragraph"
import Picture from "./components/Picture/Picture"
import Button from "./components/Button/Button"

export default function App() {
    return (
        <div className="app">

            <Paragraph className="m-test__p" text="Párrafo lorem ipsum dolor amet" />

            <Picture src_mobile="//unsplash.it/768/600" src_desktop="//unsplash.it/1200/600" alt="" />

            <Button className="btn--primary" text="Botón primario" />
            <Button className="btn--secondary" text="Botón secundario" />
        </div>
    );
}