import sampleData from './sampleData.json';

const Content = () => {
    return(
        <div>
          {sampleData.map((person)=>(
            <p> Hiyaaa, {person.name} </p>
          ))}
        </div>
      )
}
export default Content;