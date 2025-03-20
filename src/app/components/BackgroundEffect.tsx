import Image from "next/image";

export default function BackgroundEffect({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={imageSrc}
        alt="Spooky Background"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
