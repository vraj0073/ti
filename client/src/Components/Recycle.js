import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardElement from "./CardElement";
import data from "../data";
import dayjs from "dayjs";
import NavigationBar from "./NavigationBar";

export default function Recycle() {
  const [items, setItems] = useState();

  useEffect(() => {
    const ds = [];
    data.map((i) => {
      if (dayjs().diff(i.createdAt, "hours") >= 24) {
        ds.push(i);
      }
    });
    console.log(ds);
    setItems(ds);
  }, []);

  return items ? (
    <div>
      <NavigationBar />
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {items.map((i) => (
          <CardElement
            itemName={i.name}
            content={i.sender.address}
            quantity={i.quantity}
            sender={i.sender}
            imageUrl={i.imageUrl}
          ></CardElement>
        ))}
      </Grid>
    </div>
  ) : (
    <p>loading</p>
  );
}
