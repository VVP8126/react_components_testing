import { render, screen } from "@testing-library/react";
import mockAxios from "axios";
import { MemoryRouter } from "react-router-dom";
// import userEvent from '@testing-library/user-event';
import UserDetailedPage from "../../pages/UserDetailedPage";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";

import { create } from "react-test-renderer";

// jest.mock('axios'); // - From the original example

describe('Mock test', () => { 
    let response;
    
    beforeEach(() => {
        response = {data: [
            {"id":1, "username": "Bret"},
            {"id":2, "username": "Antonette"},
            {"id":3, "username": "Samantha"}
        ]};
    });
    
    test('Test axios call ', async() => {
      /** 
        // Original example - doesn't work !!!
        render(<Users />);
        axios.get.mockReturnValue(response);     
        const users = await screen.findAllByTestId("userItem");
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
      */

        // Found custom example
        mockAxios.get.mockImplementationOnce(() => Promise.resolve(response));
        expect(mockAxios.get).toHaveBeenCalledTimes(0);
        // OR SO: // UserService.loadUsers();
        render(
          <MemoryRouter initialEntries={["/about"]} >            
            <Routes>
              <Route path='about' element={<About />} />
              <Route path='about/:id' element={<UserDetailedPage />} />
            </Routes>
          </MemoryRouter>
        );
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        const linkElements = await screen.findAllByTestId("userLinkItem");
        expect(linkElements.length).toBe(3);
        
    });

    it("Links render", async () => {
      mockAxios.get.mockImplementationOnce(() => Promise.resolve(response));
      let renderer = create(
        <MemoryRouter initialEntries={["/about"]}>
          <Routes>
            <Route path='about' element={<About />} />
            <Route path='about/:id' element={<UserDetailedPage />} />
          </Routes>
        </MemoryRouter>
      );
      expect(renderer.toJSON()).toMatchSnapshot();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

});