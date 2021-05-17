const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Total = ({ course }) => {
    const sum = course.parts.reduce((part1, part2) => {
        if (typeof part1 === 'number') {
            return part1 + part2.exercises
        } else {
            return part1.exercises + part2.exercises
        }
    })
    return (
        <p>Number of exercises {sum}</p>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}


const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part => {
                return <Part part={part} key={part.name} />
            })}
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course