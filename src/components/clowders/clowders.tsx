import ClowderThumbnail from '../clowder-thumbnail';
import './clowders.scss';

interface ClowderProps {
    list: Array<string>
}

const Clowders: React.FC<ClowderProps> = ({list}) => {

    const clowderArr = new Array(4).fill([null, null, null])
    list.forEach((id, index) => {
        clowderArr[index] = id.split(',')
    })

    return (
        <div className='clowders'>
            <h4>Clowders found</h4>
            {
                clowderArr.map( (clowder: Array<string|null>) => {
                    return (
                        <div className='clowder-row'>
                            {
                                clowder.map(cat=><div>{cat && <ClowderThumbnail id={cat} key={cat} />}</div>)
                            }
                        </div>
        
                    )
                })
            }
        </div>
    );
}

export default Clowders;