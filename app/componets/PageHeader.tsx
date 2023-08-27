interface propType {
    pageHeading: any
}
const PageHeader = (props: propType) => {
    return (
        <div className="h-[25vh] md:h-[30vh] mb-5 font-bold" style={{ backgroundImage: 'url(/images/heroImage.jpg)', backgroundPosition: 'center right', backgroundSize: 'cover' }}>
            <h2 className="text-orange-800 text-2xl md:text-5xl h-full w-full flex justify-center items-center pageHeaderGradient">
                {props.pageHeading}
            </h2>
        </div>
    )
}

export default PageHeader