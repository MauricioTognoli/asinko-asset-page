"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { PostsSection } from "@/components/posts/posts-section";
import { ThesesSection } from "@/components/theses/theses-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TAB_ORDER = ["posts", "theses"] as const;
type TabValue = (typeof TAB_ORDER)[number];

export function AssetContentTabs() {
  const [activeTab, setActiveTab] = useState<TabValue>("posts");
  const [direction, setDirection] = useState<1 | -1>(1);

  function handleValueChange(value: TabValue) {
    const nextIndex = TAB_ORDER.indexOf(value);
    const currentIndex = TAB_ORDER.indexOf(activeTab);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveTab(value);
  }

  return (
    <Tabs value={activeTab} onValueChange={handleValueChange}>
      <TabsList variant="line" className="h-12 w-full border-b border-border">
        <TabsTrigger
          value="posts"
          className="flex-1 after:h-0.75 after:bg-brand"
        >
          Posteos
        </TabsTrigger>
        <TabsTrigger
          value="theses"
          className="flex-1 after:h-0.75 after:bg-brand"
        >
          Tesis
        </TabsTrigger>
      </TabsList>
      <TabsContent value="posts">
        <motion.div
          initial={{ opacity: 0, x: 24 * direction }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <PostsSection />
        </motion.div>
      </TabsContent>
      <TabsContent value="theses">
        <motion.div
          initial={{ opacity: 0, x: 24 * direction }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <ThesesSection />
        </motion.div>
      </TabsContent>
    </Tabs>
  );
}
