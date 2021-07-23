import { useEffect, useState } from "react";
import { checkClowdervalidity } from "../../services/cat-apis";
import { CatType } from "../../utils/type-definitions";
import Cat from "../cat";
import Clowders from "../clowders";
import FeedbackDialog from "../feedback-dialog";
import Spinner from "../spinner";
import './catbag.scss';

interface CatBagProps {
    cats: CatType[]
}

const CatBag: React.FC<CatBagProps> = ({ cats }) => {

    const [activeClowder, setActiveClowder] = useState<string[]>([])
    const [clowderList, setClowderList] = useState<string[]>([])
    const [isChecking, setIsChecking] = useState(false)
    const [feedback, setFeedback] = useState<any | null>(null)

    useEffect(() => {
        if (activeClowder.length === 3) {
            (async () => {
                setIsChecking(true)
                setFeedback(null)
                const isValidClowder = await checkClowdervalidity(activeClowder)
                if (isValidClowder.valid) {
                    setActiveClowder([])
                    if(!clowderList.includes(isValidClowder.id)) {
                        setClowderList([...clowderList, isValidClowder.id])
                        setFeedback({ heading: 'Congratulations!', message: 'These cats get along.' })    
                    } else {
                        setFeedback({ heading: 'Oops!', message: 'This clowder set already exists.' })
                    }
                } else {
                    setActiveClowder([...activeClowder.slice(0, -1)])
                    setFeedback({ heading: 'Oops!', message: 'These cats do not get along.' })
                }
                setIsChecking(false)
            })()
        }
    }, [activeClowder])

    const catSelected = (id: string) => {
        if (!activeClowder.includes(id)) {
            setActiveClowder([...activeClowder, id])
        } else {
            setActiveClowder([...activeClowder.filter(catId => catId !== id)])
        }
    }

    return (
        <>
            <div className='cat-bag-container'>
                {
                    cats.map(cat => <Cat cat={cat} handleCatSelection={catSelected} key={cat.id} selected={activeClowder.includes(cat.id)} />)
                }
            </div>
            <Clowders list={clowderList} />
            {feedback && <FeedbackDialog heading={feedback.heading} message={feedback.message} />}
            {isChecking && <Spinner />}
        </>
    );
}

export default CatBag;