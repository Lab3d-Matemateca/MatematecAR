import { NavButton } from "@/components/button";
import { pontesDeKonigsbergRoute } from "@/lib/routes";
import { Text, View } from "react-native";

export type Artifact = {
  id: string;
  slug: string;
  url: string;
};

const artifacts: Artifact[] = [
  {
    id: "pontesDeKonigsberg",
    slug: "Pontes de Konigsberg",
    url: pontesDeKonigsbergRoute,
  },
];

export default function Index() {
  return (
    <View className="flex-1 w-full h-full flex flex-col justify-center items-center px-2">
      {artifacts.map((artifact) => (
        <NavButton href={artifact.slug} key={artifact.id} className="bg-black">
          {artifact.slug}
        </NavButton>
      ))}
    </View>
  );
}
