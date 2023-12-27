const Section = (props) => {
    return (
        <section className={`w-full flex items-center ${props.justify} ${props.padding} ${props.margin}`}>
            {props.children}
        </section>
    );
}

export default Section;