import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Blog() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Blog</Logo>
        <h3>Welcome to my portfolio page! I'm Shubham, a passionate web developer dedicated to crafting seamless digital experiences. My journey into web development began with a curiosity to understand how websites work and evolved into a full-fledged career fueled by a desire to bring ideas to life on the digital canvas. From the early days of tinkering with HTML and CSS to mastering the intricacies of JavaScript and beyond, I've embarked on a continuous learning journey, eagerly embracing new technologies and 
            methodologies along the way. Through experimentation, online tutorials, and hands-on experience with real-world projects, I've honed my skills, overcome challenges, and gained invaluable insights into the dynamic landscape of web development.

For me, web development is about more than just writing code—it's about creating captivating
 and engaging experiences that prioritize the end-user. Every line of code I write, every design decision I make, is guided by a commitment to usability, accessibility, and performance. Whether it's crafting a user-friendly interface, optimizing for mobile responsiveness, or implementing cutting-edge features, I strive to deliver experiences that not only meet but exceed expectations.

My portfolio showcases a diverse range of projects, each representing a unique challenge and an opportunity for creative expression. From sleek and modern websites for small businesses to robust web applications for enterprise clients, I've had the privilege of collaborating with a variety of stakeholders to bring their visions to life. Each project is a testament to my dedication to quality and attention to detail, as well as my ability to adapt to evolving technologies and industry trends.

In an ever-changing landscape where innovation is constant, staying
 abreast of the latest advancements is essential. That's why I'm committed to lifelong learning and professional development, regularly seeking out new opportunities to expand my skill set and push the boundaries of what's possible in web development. Whether it's mastering a new framework, exploring emerging design trends, or delving into the world of user experience (UX) design, I'm always eager to broaden my horizons and deepen my expertise.

But perhaps the most rewarding aspect of being a web developer is the opportunity to make a tangible impact on people's lives. Whether it's helping a small business establish its online presence, empowering a nonprofit organization to reach a wider audience, or creating a platform that enhances the lives of millions, the potential for positive change is boundless. As a web developer, I see myself not just as a coder, but as a creator—a creator of experiences that inspire, inform, and connect people in meaningful ways.

If you're looking for a skilled web developer to bring your ideas to life or collaborate on an exciting project, I invite you to explore my portfolio and reach out to discuss how we can work together to achieve your goals. Whether you're a startup with a bold vision, an established company looking to innovate, or an individual with a passion project, I'm here to help turn your ideas into reality. Thank you for taking the time to learn more about my journey in web development—I look forward to the opportunity to collaborate and create something truly remarkable together.</h3>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Blog;