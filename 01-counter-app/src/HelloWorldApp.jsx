import PropTypes from 'prop-types'

const info = {
    title :'functional component',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, maxime provident? Assumenda doloribus ut facere adipisci, rerum sint? Animi sit beatae commodi perferendis labore asperiores! Totam vel molestias quia illum!'    
}

export const HelloWorldApp = ({ title, content, year }) => {
    return (
        <>
            <h1>HelloWorld App { title }</h1>
            <strong>{ year }</strong>
            <p>{ content }</p>
            
        </>
    )
}

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    year: PropTypes.number.isRequired
};

HelloWorldApp.defaultProps = {
    title: 'Title undefined'
}

