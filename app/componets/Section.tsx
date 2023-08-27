const Sections = (props: any) => {
    return (
        <div className="w-full p-2 md:px-20 md:py-5">
            <h2 className="text-3xl md:text-4xl text-orange-800 underline font-bold pt-2 text-center ">
                {props.heading}
            </h2>
        </div>
    )
}

export default Sections