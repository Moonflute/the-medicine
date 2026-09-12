"use client";
import {useSearchParams} from "next/navigation";
import {SearchPanel} from "@/components/search-panel";
import type {SearchEntry} from "@/lib/types";
export function SearchRoutePanel({entries}:{entries:SearchEntry[]}){const params=useSearchParams();const query=params.get("q")??"";return <SearchPanel key={query} entries={entries} initialQuery={query}/>;}
