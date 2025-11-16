import Layout from "@/components/Layout";
import { _w } from "@/utils/wordingSystem";

const Home = () => {
    const wording = _w("home");

    return (
        <Layout>
            <main>
                <h1>{wording.title}</h1>
            </main>
        </Layout>
    );
};

export default Home;
