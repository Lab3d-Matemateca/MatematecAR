import { NavButton } from "@/components/button";
import { pontesDeKonigsbergRoute } from "@/lib/router";
import { View } from "react-native";

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
    <View className="flex-1 flex flex-col gap-4">
      {artifacts.map((artifact) => (
        <NavButton href={artifact.slug} key={artifact.id}>
          {artifact.slug}
        </NavButton>
      ))}
    </View>
  );
}
