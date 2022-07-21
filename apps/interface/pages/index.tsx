import type { NextPage, GetStaticProps } from "next";
import { NextSeo } from "next-seo";

import { getBaseConfig } from "../utils/getBaseConfig";
import {
    fetchFuseLeveragedTokens,
    FuseLeveragedTokens,
} from "../utils/fetchFuseLeveragedTokens";
import { getFuseLeveragedTokensSummary } from "../utils/getFuseLeveragedTokensSummary";

import { WarningBar } from "../components/WarningBar";
import { NavigationBar } from "../components/NavigationBar";
import { HomeHeading } from "../components/HomeHeading";
import { TokenCards } from "../components/TokenCard/cards";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps extends FuseLeveragedTokens {}

const Home: NextPage<HomeProps, unknown> = (props) => {
    const baseConfig = getBaseConfig();
    const { totalMarketCap, totalVolume } =
        getFuseLeveragedTokensSummary(props);
    const { tokens } = props;

    return (
        <>
            <NextSeo
                title={`Trade Leveraged Tokens on ${baseConfig.chainName}`}
            />
            <WarningBar />
            <NavigationBar />
            <HomeHeading
                totalMarketCap={totalMarketCap}
                totalVolume={totalVolume}
            />
            <TokenCards tokens={tokens} />
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    // Get list of FLTs
    const data = await fetchFuseLeveragedTokens();
    return { props: data, revalidate: 3600 };
};

export default Home;
