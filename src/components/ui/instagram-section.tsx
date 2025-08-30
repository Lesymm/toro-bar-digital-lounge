import { Button } from "./button";
import { Instagram, ExternalLink } from "lucide-react";

export const InstagramSection = () => {
  const instagramHandle = "@torobar14th_st";
  const instagramUrl = "https://www.instagram.com/torobar14th_st/";

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Instagram className="h-6 w-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Latest from Instagram
          </h2>
        </div>
        
        {/* Instagram Embed */}
        <div className="max-w-md mx-auto mb-8">
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink={`${instagramUrl}?utm_source=ig_embed&amp;utm_campaign=loading`}
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '99.375%'
            }}
          >
            <div style={{ padding: '16px' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <div style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '50%',
                  flexGrow: '0',
                  height: '40px',
                  marginRight: '14px',
                  width: '40px'
                }}></div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: '1',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '4px',
                    flexGrow: '0',
                    height: '14px',
                    marginBottom: '6px',
                    width: '100px'
                  }}></div>
                  <div style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '4px',
                    flexGrow: '0',
                    height: '14px',
                    width: '60px'
                  }}></div>
                </div>
              </div>
              <div style={{ padding: '19% 0' }}></div>
              <div style={{
                display: 'block',
                height: '50px',
                margin: '0 auto 12px',
                width: '50px'
              }}>
                <Instagram className="h-12 w-12 text-gray-600" />
              </div>
              <div style={{ paddingTop: '8px' }}>
                <div style={{
                  color: '#3897f0',
                  fontFamily: 'Arial,sans-serif',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '550',
                  lineHeight: '18px'
                }}>
                  View this post on Instagram
                </div>
              </div>
            </div>
          </blockquote>
        </div>

        <Button 
          onClick={() => window.open(instagramUrl, '_blank')}
          className="luxury-button text-base px-6 py-2 group"
        >
          <Instagram className="h-4 w-4 mr-2" />
          Follow {instagramHandle}
          <ExternalLink className="h-3 w-3 ml-2 opacity-70" />
        </Button>
        
        {/* Load Instagram embed script */}
        <script async src="//www.instagram.com/embed.js"></script>
      </div>
    </section>
  );
};