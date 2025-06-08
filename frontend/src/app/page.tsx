"use client";
import { useEffect, useMemo, useState } from "react";
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import supabase from "client/supabase";
import strapiClient from "client/strapi";

export default function HomePage() {
  // const articles = strapiClient.collection('teams');
  const [allScores, setAllScores] = useState<any[]>([]);
  const { data: teamsWithScoresResponse } = useQuery({
    queryKey: ['teamsWithScores'],
    queryFn: () => strapiClient.collection('teams').find({ populate: 'scores' }),
  });
  const finalScores = useMemo(() => {
    return allScores.reduce((acc, score) => {
      acc[score.team] = (acc[score.team] || 0) + score.score;
      return acc;
    }, {});
  }, [allScores]);

  useEffect(() => {
    if (teamsWithScoresResponse?.data) {
      const scores = [];
      for (const teamWithScores of teamsWithScoresResponse?.data) {
        for (const score of teamWithScores.scores) {
          scores.push({ ...score, team: teamWithScores.documentId });
        }
      }

      setAllScores(scores);
    }
  }, [teamsWithScoresResponse]);

  useEffect(() => {
    const challengeChannel = supabase.channel('challenge-channel')
    challengeChannel.on('broadcast', { event: 'challenge' }, ({ payload }) => {
      console.log({ payload });
      if (payload.event === 'entry.create' && payload.model === 'team-score') {
        const newScore = { ...payload.entry, team: payload.entry.team.documentId };
        console.log({ newScore });
        setAllScores((prev) => [...prev, newScore]);
        // setFinalScores({ ...finalScores, [newScore.team]: (finalScores[newScore.team] || 0) + newScore.score });
      }
    }).subscribe();

    return () => {
      challengeChannel.unsubscribe();
    }
  }, []);

  // const averageScoreByTeam = allScores.reduce((acc, score) => {

  return (
    <div id="home-page">
      {/* <pre>{JSON.stringify(teamsWithScoresResponse?.data, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(allScores, null, 2)}</pre>
      <pre>{JSON.stringify(finalScores, null, 2)}</pre> */}
      <Grid container spacing={2}>
        {teamsWithScoresResponse?.data.map((team) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={team.documentId}>
            <Typography variant="h2">{team.name}, score: {finalScores[team.documentId] ?? 0}</Typography>
            <List>
              {allScores.filter((score) => score.team === team.documentId).map((score: any) => (
                <ListItem key={score.documentId}>
                  <ListItemText
                    primary={`${score.score > 0 ? '+' : ''}${score.score} points`}
                    secondary={new Date(score.createdAt).toLocaleString()}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
