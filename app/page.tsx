import Image from "next/image";
import Topnav from '@/components/header/topnav';
import Nav from '@/components/header/nav'
import Landing from '@/components/layout/landing'
import Quick from '@/components/layout/announcement'
import WhyPSW from '@/components/layout/whyucek'
import NewsEvents from '@/components/layout/events'
import AdministrationPanel from '@/components/layout/admins'
import MorePSW from '@/components/layout/ucekmore'
import Footer from '@/components/layout/footer'
import Link from "next/link";
import HeroSlider from "@/components/layout/landing";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 头部导航区域 */}
      <header className="sticky top-0 z-50">
        <Topnav />
        <Nav />
      </header>
      
      {/* 主要内容区域 */}
      <main className="flex-grow">
        {/* 轮播图部分 - 全宽显示 */}
        <section className="w-full">
          <HeroSlider />
        </section>
        
        {/* 公告区域 - 带容器 */}
        <section className="py-8 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <Quick />
          </div>
        </section>
        
        {/* 为什么选择我们 - 全宽显示 */}
        <section className="w-full">
          <WhyPSW />
        </section>
        
        {/* 新闻与活动 - 带容器和背景 */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <NewsEvents />
          </div>
        </section>
        
        {/* 管理团队介绍 - 带容器 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AdministrationPanel />
          </div>
        </section>
        
        {/* 更多信息区域 - 带容器和背景 */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <MorePSW />
          </div>
        </section>
      </main>
      
      {/* 页脚区域 */}
      <footer className="bg-white border-t">
        <Footer />
      </footer>
    </div>
  );
}
