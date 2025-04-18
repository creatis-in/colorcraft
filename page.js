
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";

export default function Home() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">ColorCraft by Creatis</h1>
      <p className="text-gray-500 mb-6 text-center max-w-md">
        Upload your design and start building unique color palettes from your custom block print colors.
      </p>

      <label className="cursor-pointer mb-6">
        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
        <Button>
          <Upload className="w-4 h-4 mr-2" /> Upload Design
        </Button>
      </label>

      {image && (
        <Card className="max-w-md w-full">
          <CardContent className="p-4">
            <img src={image} alt="Uploaded design" className="rounded-xl w-full" />
          </CardContent>
        </Card>
      )}

      <div className="mt-10 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Your Color Palette</h2>
        <p className="text-gray-400">Palette builder coming next...</p>
      </div>
    </main>
  );
}
