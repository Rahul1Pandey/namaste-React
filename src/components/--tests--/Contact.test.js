import {render,screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us page test cases",()=>{
    test("should load contact us component",()=>{
        render(<Contact />)
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    })
    
    it("should load  text in contact us component",()=>{
        render(<Contact />)
        const Submit = screen.getByText("Submit");
    
        expect(Submit).toBeInTheDocument();
    
    })
    
    test("should load  the placeholder in contact us component",()=>{
        render(<Contact />)
        const inputName = screen.getByPlaceholderText("Name")
    
        expect(inputName).toBeInTheDocument()
    
    })
})