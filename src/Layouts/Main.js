import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Components/Blog/Blog';
import ErrorPage from '../Components/ErrorPage/ErrorPage'
import QuizDetails from '../Components/QuizDetails/QuizDetails';
import Root from '../Components/Root/Root';
import Statistics from '../Components/Statistics/Statistics';
import Topics from '../Components/Topics/Topics';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
        },
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Topics />,
            },
            {
                path: 'quiz/:id',
                element: <QuizDetails />,
                loader: async ({ params }) => {
                    return fetch(
                        `https://openapi.programming-hero.com/api/quiz/${params.id}`,
                    );
                },
            },
            { path: 'statistics', element: <Statistics /> },
            { path: 'blog', element: <Blog /> },
        ],
    },
]);

export default router;
