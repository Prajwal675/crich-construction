
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';
import { Button } from './ui/button';

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    likes: 245,
    comments: 18
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    likes: 189,
    comments: 24
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    likes: 432,
    comments: 32
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    likes: 321,
    comments: 15
  }
];

const SocialFeed = () => {
  const instagramUrl = "https://www.instagram.com/crich_ventures?utm_source=qr&igsh=MXhkNHBzZnoyMjhq";
  const youtubeUrl = "https://youtube.com/@crichventures?si=37A92Nmf5Cgh6wYD";

  return (
    <section className="section-padding bg-buildacre-bg">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Follow Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Stay updated with our latest projects and behind-the-scenes moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default"
              size="lg"
              asChild
              className="bg-buildacre-orange hover:bg-buildacre-orange/90"
            >
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Follow @crich_ventures
              </a>
            </Button>
            <Button 
              variant="default"
              size="lg"
              asChild
              className="bg-red-600 hover:bg-red-700"
            >
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-5 w-5" />
                Subscribe on YouTube
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="relative group overflow-hidden rounded-lg aspect-square">
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <p className="font-semibold">{post.likes} likes</p>
                  <p className="text-sm">{post.comments} comments</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
