//This would render the homepage

import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Create & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient tect-center">AI powered prompts</span>
      </h1>
      <p className="desc text-center">
        Promptpedia is an open-source AI prompting tool for modern world
      </p>
      <Feed />
    </section>
  );
};

export default Home;
