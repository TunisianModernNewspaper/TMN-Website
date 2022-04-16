import { Center, Group, Space, Text, Affix, Transition, ActionIcon } from "@mantine/core";
import React from "react";
import NavBar from "../components/navbar";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import SliderArticle from "../components/sliderArticle";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import LatestNews from "../components/latestComp";
import Footer from "../components/footer";
import { useWindowScroll } from '@mantine/hooks';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';


const AutoplaySlider = withAutoplay(AwesomeSlider);

function LandingPage() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <NavBar />
      <div
        style={{ backgroundColor: "#f5f5f5", width: "100%", height: "100%" }}
      >
        <Space />
        <Center>
          <AutoplaySlider
            organicArrows={false}
            play={true}
            cancelOnInteraction={false}
            interval={6000}
            style={{ marginTop: "50px", width: "80%", height: "50vh" }}
          >
            <div>
              <SliderArticle
                src="https://cdnb.artstation.com/p/assets/images/images/024/796/147/large/thomas-simon-untitled-8.jpg?1583562121&dl=1"
                id="02"
                title="dezz akel pull request" 
                description="enfin, ba3d allahou a3laam 9adem wa9t, ernez 3mal pull request, literally wallit nebki mel far7a ki choft el notification"
              />
            </div>
            <div>
              <SliderArticle
                src="https://i0.wp.com/www.eurasiareview.com/wp-content/uploads/2018/12/c-13.jpg?fit=830%2C510&ssl=1"
                id="3"
                title="ya wael sayab el subcategories"
                description="yfass5ou fel subcategories mel DB w au meme temps y7ebbouni ne5dem el fonctionalité ta3 page el subcategory"
              />
            </div>
            <div>
              <SliderArticle
                src="https://i0.wp.com/www.eurasiareview.com/wp-content/uploads/2018/12/c-13.jpg?fit=830%2C510&ssl=1"
                id="3"
                title="quoi??"
                description="m5ollili subcategory wa7da esmha islam?? t7ebech nroddou el site y9ollek el 9eblaa mniin wakahaw"
              />
            </div>
          </AutoplaySlider>
        </Center>
        <div
          style={{ marginTop: "50px", marginLeft: "50px", marginRight: "50px" }}
        >
          <Text weight={900} style={{ fontSize: "46px" }}>
            latest news:
          </Text>
          <Group position="center">
            <LatestNews
              id="5"
              category='news'
              subcategory='1'
              title="eds eds"
              description="description of said event"
              src="https://cdnb.artstation.com/p/assets/images/images/024/796/147/large/thomas-simon-untitled-8.jpg?1583562121&dl=1"
            />
            <LatestNews category='news' subcategory='1' id="5" title="title" description="tell me why" />
            <LatestNews
              id="5"
              category='news'
              subcategory='1'
              title="this is basically copy paste"
              description="you get the idea"
            />
          </Group>
          <Text weight={900} style={{ fontSize: "46px" }}>
            latest events:
          </Text>
          <Group position="center">
            <LatestNews
              id="5"
              category='events'
              subcategory='1'
              title="eds eds"
              description="description of said event"
              src="https://cdnb.artstation.com/p/assets/images/images/024/796/147/large/thomas-simon-untitled-8.jpg?1583562121&dl=1"
            />
            <LatestNews
              id="5"
              category='events'
              subcategory='1'
              title="title"
              description="tell me why"
              src="https://i0.wp.com/www.eurasiareview.com/wp-content/uploads/2018/12/c-13.jpg?fit=830%2C510&ssl=1"
            />
            <LatestNews
              id="5"
              category='events'
              subcategory='1'
              title="this is basically copy paste"
              description="you get the idea"
            />
          </Group>
          <Text weight={900} style={{ fontSize: "46px" }}>
            latest blogs:
          </Text>
          <Group position="center">
            <LatestNews
              id="5"
              category='blogs'
              subcategory='1'
              title="eds eds"
              description="description of said event"
              src="https://cdnb.artstation.com/p/assets/images/images/024/796/147/large/thomas-simon-untitled-8.jpg?1583562121&dl=1"
            />
            <LatestNews category='blogs' subcategory='1' id="5" title="title" description="tell me why" />
            <LatestNews
              id="5"
              category='blogs'
              subcategory='1'
              title="this is basically copy paste"
              description="you get the idea"
              src="https://i0.wp.com/www.eurasiareview.com/wp-content/uploads/2018/12/c-13.jpg?fit=830%2C510&ssl=1"
            />
          </Group>
          <Text weight={900} style={{ fontSize: "46px" }}>
            latest podcasts:
          </Text>
          <Group position="center">
            <LatestNews
              id="5"
              category='podcasts'
              subcategory='1'
              title="eds eds"
              description="description of said event"
              src="https://cdnb.artstation.com/p/assets/images/images/024/796/147/large/thomas-simon-untitled-8.jpg?1583562121&dl=1"
            />
            <LatestNews 
            category='podcasts' subcategory='1' id="5" title="title" description="tell me why" />
            <LatestNews
              id="5"
              category='podcasts'
              subcategory='1'
              title="this is basically copy paste"
              description="you get the idea"
              src="https://i0.wp.com/www.eurasiareview.com/wp-content/uploads/2018/12/c-13.jpg?fit=830%2C510&ssl=1"
            />
          </Group>
          <Space />
        </div>
      </div>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ActionIcon
              leftIcon={<Text>Up</Text>}
              style={{borderRadius:'50px', width:'40px', height:'40px', opacity:'0.7', backgroundColor:'#000'}}
              onClick={() => scrollTo({ y: 0 })}
              variant="filled"
              borderRadius={50}
            >
              <ArrowUpwardRoundedIcon ></ArrowUpwardRoundedIcon>
            </ActionIcon>
          )}
        </Transition>
      </Affix>
      <Footer/>
    </div>
  );
}

export default LandingPage;
