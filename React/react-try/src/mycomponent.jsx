import ComponentWithProps from ".//props/componentwithProps"
import AnotherComponent from ".//AnotherComponent"


const MyComponent = () =>{
    return(
        <>
            <ComponentWithProps header="This is a header from props" number={72} content="This is content via props" nonexistent = ""/>
            <AnotherComponent />
        
        </>
    );
};

export default MyComponent;