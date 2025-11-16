import Layout from "@/components/Layout";
import { _w } from "@/utils/wordingSystem";
import { useMeta } from "@/hooks/useMeta";

const Home = () => {
    const wording = _w("home");
    useMeta();

    return (
        <Layout>
            <main>
                <h1>{wording.title}</h1>
            </main>
        </Layout>
    );
};

export default Home;
