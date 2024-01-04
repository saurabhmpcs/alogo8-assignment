"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import PathIcon from "./assets/PathIcon";

const InfoCard = () => {
  const infoCard = [
    { title: "Health", value: "98.34", unit: "%" },
    { title: "Efficiency", value: "98.34", unit: "%" },
    { title: "Steam Consumption", value: "98.34", unit: "T/hr" },
    { title: "Wet Gas Flow", value: "98.34", unit: "T/hr" },
    { title: "Time To Failure ", value: "44", unit: "Weeks" },
    { title: "Power Consumption", value: "45", unit: "MW" },
    { title: "InterStage Cooker Temp.", value: "98.34", unit: "C" },
    { title: "Health", value: "98.34", unit: "Kg/cm" },
  ];

  return (
    <div>
      <Box className="max-h-40 max-w-6xl">
        <Grid className="flex flex-row flex-wrap gap-x-1 ">
          {infoCard.map((item) => (
            <Grid className="max-h-32 max-w-60">
              <Card className="bg-white max-h-24 max-w-52">
                <CardContent className="flex flex-row ">
                  <div className="flex flex-col gap-y-2 max-w-36 ">
                    <p className="font-light text-xs "> {item.title}</p>
                    <div className=" ">
                      <span className="text-xl font-semibold">
                        {item.value}
                      </span>
                      <span className=" ml-1 text-sm">{item.unit}</span>
                    </div>
                  </div>

                  <div className=" mt-10 ml-7 bg-gray-100">
                    <PathIcon />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default InfoCard;
