

const Carousel = (props: any) => {
    return (
        <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
            {props.children}
        </div>
    )
}
export default Carousel