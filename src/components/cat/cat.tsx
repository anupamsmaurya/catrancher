import { CatType } from "../../utils/type-definitions";
import "./cat.scss";

interface CatProps {
    cat: CatType,
    selected: boolean,
    handleCatSelection: (id: string) => void
}

const Cat: React.FC<CatProps> = ({ cat, selected, handleCatSelection }) => {
    return (
        <div onClick={() => handleCatSelection(cat.id)} className={`cat-box ${selected? "selected": ""}`}>
            <img src={`http://quantcats.herokuapp.com/static/cats/${cat.id}.png`} alt={`${cat.id} cat`} />
        </div>
    );
}

export default Cat;