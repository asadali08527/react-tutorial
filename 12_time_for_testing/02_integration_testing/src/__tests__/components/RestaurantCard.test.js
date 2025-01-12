import RestaurantCard from "../../components/RestaurantCard";
import { render, screen } from '@testing-library/react';
import MOCK_DATA from '../mocks/RestaurantCardMockData.json';
import '@testing-library/jest-dom';


describe('RestaurantCard component', () => {

    test('should render restaurant card component', () => {
        render(<RestaurantCard restData={MOCK_DATA} />);

        const restaurantName = screen.getByText("Biryani Pot");
        
        expect(restaurantName).toBeInTheDocument( );
    });
});