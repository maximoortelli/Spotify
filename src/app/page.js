import ListAlbums from "@/components/ListAlbums";
import ListAlbums2 from "@/components/ListAlbums2";
import ListAlbums3 from "@/components/ListAlbums3";


export default function Home() {
  return (
    <div className="pt-28  pl-72  pr-9">
        <ListAlbums title="Spotify Playlist" />
        <ListAlbums2 title="Suggestions for today" />
        <ListAlbums3 title="Hits of the moment" />
        <ListAlbums title="Hot new releases" />
    </div>
  )
}
