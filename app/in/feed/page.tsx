"use client";

import { FormEventHandler, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Heart, MessageCircle, Share2 } from "lucide-react";

// Mock data for posts
const posts = [
  {
    id: 1,
    user: { name: "Alice", avatar: "/placeholder.svg?height=40&width=40" },
    image: "/placeholder.svg?height=400&width=400",
    likes: 120,
    comments: 15,
    caption: "My cat Whiskers doing his best loaf impression! 🍞😺",
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    user: { name: "Bob", avatar: "/placeholder.svg?height=40&width=40" },
    image: "/placeholder.svg?height=400&width=400",
    likes: 89,
    comments: 7,
    caption:
      "Caught Mittens mid-yawn. I think she's trying to tell me something! 😹",
    timeAgo: "4 hours ago",
  },
  {
    id: 3,
    user: { name: "Charlie", avatar: "/placeholder.svg?height=40&width=40" },
    image: "/placeholder.svg?height=400&width=400",
    likes: 256,
    comments: 32,
    caption: "Luna's first time seeing snow. Her reaction is priceless! ❄️😻",
    timeAgo: "6 hours ago",
  },
];

export default function Feed() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

function Post({ post }: { post: any }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [comment, setComment] = useState("");

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleComment: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // Here you would typically send the comment to your backend
    console.log("New comment:", comment);
    setComment("");
  };

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={post.user.avatar} alt={post.user.name} />
          <AvatarFallback>{post.user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-sm font-semibold">{post.user.name}</p>
          <p className="text-xs text-gray-500">{post.timeAgo}</p>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <img src={post.image} alt="Cat post" className="w-full h-auto" />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-4 w-full">
          <Button variant="ghost" size="icon" onClick={handleLike}>
            <Heart
              className={`h-5 w-5 ${liked ? "fill-red-500 text-red-500" : ""}`}
            />
            <span className="sr-only">Like</span>
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-5 w-5" />
            <span className="sr-only">Comment</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 className="h-5 w-5" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
        <div className="text-sm font-semibold">{likes} likes</div>
        <p className="text-sm">
          <span className="font-semibold">{post.user.name}</span> {post.caption}
        </p>
        <Button variant="link" className="text-muted-foreground p-0 h-auto">
          View all {post.comments} comments
        </Button>
        <Separator className="w-full" />
        <form
          onSubmit={handleComment}
          className="flex w-full items-center gap-2"
        >
          <Input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" variant="ghost">
            Post
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
