import { useEffect, useState } from "react";
import { getCatBag } from "../../services/cat-apis";
import { CatType } from "../../utils/type-definitions";
import CatBag from "../catbag";
import './app.scss';

const App = () => {
    const [cats, setCats] = useState<CatType[]>([])

    useEffect(() => {
        (async () => {
            const data = await getCatBag()
            setCats(data)
        })()
    }, [])

    return (
        <div>
            <h1>Catrancher</h1>
            <div>{(new Date()).toDateString()}</div>
            <div className='main-container'>
                <CatBag cats={cats} />                
            </div>
        </div>
    );
}

export default App;