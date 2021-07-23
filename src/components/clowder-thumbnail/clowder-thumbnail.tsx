interface ThumbnailType {
    id: string
}

const ClowderThumbnail: React.FC<ThumbnailType> = ({id}) => {
    return <img src={`http://quantcats.herokuapp.com/static/cats/${id}.png`} alt={`${id} cat thumnail`} />
}

export default ClowderThumbnail;