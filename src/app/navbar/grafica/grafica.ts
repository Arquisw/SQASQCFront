import { Injectable, ViewChild } from "@angular/core";
import { ApexAnnotations, ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexStroke, ApexTheme, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from "ng-apexcharts";
import { RequisitosService } from "src/app/servicio/requisito/requisitos.service";

export type ChartOptions = {
    annotations: ApexAnnotations;    
    grid : ApexGrid | any;
    legend : ApexLegend| any;
    stroke: ApexStroke | any;
    tooltip: ApexTooltip | any;
    series :  ApexAxisChartSeries | ApexNonAxisChartSeries | any;
    chart: ApexChart | any;
    dataLabels: ApexDataLabels | any;
    plotOptions: ApexPlotOptions | any;
    yaxis: ApexYAxis | any;
    xaxis: ApexXAxis | any;
    theme : ApexTheme | any;
    fill : ApexFill | any;
}

@Injectable({
    providedIn: 'root'
})
export class grafica {
    @ViewChild("chart") chart!: ChartComponent;
    public GraficaVerde : Partial<ChartOptions>;
    public BarraVerde : Partial<ChartOptions>;
    public GraficaAmarilla : Partial <ChartOptions>;
    public GraficaAmarillaIzq : Partial <ChartOptions>;
        
    constructor() {

        this.GraficaAmarillaIzq = {
            "annotations": {},
            "chart": {
                "animations": {
                    "enabled": false,
                    "easing": "swing"
                },
                "background": "#292D33",
                "foreColor": "#fff",
                "fontFamily": "Roboto",
                "height": 375,
                "id": "mJd8S",
                "stackOnlyBar": true,
                "toolbar": {
                    "show": false
                },
                "type": "bar",
                "width": 401,
                "zoom": {
                    "enabled": false
                }
            },
            "plotOptions": {
                "bar": {
                    "horizontal": true,
                    "barHeight": "100%",
                    "borderRadiusApplication": "around",
                    "borderRadiusWhenStacked": "all",
                    "hideZeroBarsWhenGrouped": false,
                    "isDumbbell": false,
                    "isFunnel": false,
                    "isFunnel3d": true,
                    "dataLabels": {
                        "total": {
                            "enabled": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "color": "#373d3f",
                                "fontSize": "12px",
                                "fontWeight": 600
                            }
                        }
                    }
                },
                "bubble": {
                    "zScaling": true
                },
                "treemap": {
                    "dataLabels": {
                        "format": "scale"
                    }
                },
                "radialBar": {
                    "hollow": {
                        "background": "#fff"
                    },
                    "dataLabels": {
                        "name": {},
                        "value": {},
                        "total": {}
                    },
                    "barLabels": {
                        "enabled": false,
                        "margin": 5,
                        "useSeriesColors": true,
                        "fontWeight": 600,
                        "fontSize": "16px"
                    }
                },
                "pie": {
                    "donut": {
                        "labels": {
                            "name": {},
                            "value": {},
                            "total": {}
                        }
                    }
                }
            },
            "dataLabels": {
                "enabled": false,
                "offsetX": -2,
                "offsetY": -3,
                "style": {
                    "fontWeight": 700,
                    "colors": [
                        "#fff"
                    ]
                },
                "background": {
                    "enabled": false
                }
            },
            "grid": {
                "show": false,
                "borderColor": "#6e7eaa",
                "yaxis": {
                    "lines": {
                        "show": false
                    }
                },
                "row": {},
                "padding": {
                    "right": 25,
                    "left": 15
                }
            },
            "legend": {
                "show": false,
                "fontSize": 14,
                "offsetY": 0,
                "markers": {
                    "shape": "square",
                    "size": 8
                },
                "itemMargin": {
                    "vertical": 0
                }
            },
            "series": [
                {
                    "name": "Bar",
                    "data": [
                        {
                            "x": "Incorrecto",
                            "y": "10",
                            "fillColor": "#FF3300"
                        },
                        {
                            "x": "Ambiguo",
                            "y": "12",
                            "fillColor": "#FF6600"
                        },
                        {
                            "x": "Incompleto",
                            "y": "15",
                            "fillColor": "#FF9900"
                        },
                        {
                            "x": "Débil",
                            "y": "19",
                            "fillColor": "#FFCC00"
                        },
                        {
                            "x": "Intrascedente",
                            "y": "23",
                            "fillColor": "#FFCC66"
                        },
                        {
                            "x": "Inestable",
                            "y": "26",
                            "fillColor": "#FFE166"
                        },
                        {
                            "x": "NO Comprobable",
                            "y": "29",
                            "fillColor": "#FFFF00"
                        },
                        {
                            "x": "NO Identificable",
                            "y": "32",
                            "fillColor": "#FFFF66"
                        },
                        {
                            "x": "NO Trazable",
                            "y": "35",
                            "fillColor": "#FFFF99"
                        }
                    ],
                    "zIndex": 0
                }
            ],
            "stroke": {
                "show": false,
                "fill": {
                    "type": "solid",
                    "opacity": 0.85,
                    "gradient": {
                        "shade": "dark",
                        "type": "horizontal",
                        "shadeIntensity": 0.5,
                        "inverseColors": true,
                        "opacityFrom": 1,
                        "opacityTo": 1,
                        "stops": [
                            0,
                            50,
                            100
                        ],
                        "colorStops": []
                    }
                }
            },
            "tooltip": {
                "shared": false,
                "hideEmptySeries": true,
                "intersect": true
            },
            "xaxis": {
                "labels": {
                    "show": false,
                    "style": {}
                },
                "group": {
                    "groups": [],
                    "style": {
                        "colors": [],
                        "fontSize": "12px",
                        "fontWeight": 400,
                        "cssClass": ""
                    }
                },
                "axisBorder": {
                    "show": false
                },
                "axisTicks": {
                    "show": false
                },
                "tickPlacement": "between",
                "title": {
                    "style": {
                        "fontWeight": 700
                    }
                },
                "tooltip": {
                    "enabled": false
                }
            },
            "yaxis": {
                "tickAmount": 5,
                "labels": {
                    "offsetX": 100,
                    "style": {}
                },
                "title": {
                    "style": {
                        "fontWeight": 700
                    }
                }
            },
            "theme": {
                "mode": "dark",
                "palette": "palette4"
            }
        }

        this.GraficaAmarilla = {
            "annotations": {},
            "chart": {
                "animations": {
                    "enabled": false,
                    "easing": "swing"
                },
                "background": "#292D33",
                "foreColor": "#fff",
                "fontFamily": "Roboto",
                "height": 375,
                "id": "mJd8S",
                "stackOnlyBar": true,
                "toolbar": {
                    "show": false
                },
                "type": "bar",
                "width": 550,
                "zoom": {
                    "enabled": false
                }
            },
            "plotOptions": {
                "bar": {
                    "horizontal": true,
                    "barHeight": "100%",
                    "borderRadiusApplication": "around",
                    "borderRadiusWhenStacked": "all",
                    "hideZeroBarsWhenGrouped": false,
                    "isDumbbell": false,
                    "isFunnel": false,
                    "isFunnel3d": true,
                    "dataLabels": {
                        "total": {
                            "enabled": false,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "color": "#373d3f",
                                "fontSize": "12px",
                                "fontWeight": 600
                            }
                        }
                    }
                },
                "bubble": {
                    "zScaling": true
                },
                "treemap": {
                    "dataLabels": {
                        "format": "scale"
                    }
                },
                "radialBar": {
                    "hollow": {
                        "background": "#fff"
                    },
                    "dataLabels": {
                        "name": {},
                        "value": {},
                        "total": {}
                    },
                    "barLabels": {
                        "enabled": false,
                        "margin": 5,
                        "useSeriesColors": true,
                        "fontWeight": 600,
                        "fontSize": "16px"
                    }
                },
                "pie": {
                    "donut": {
                        "labels": {
                            "name": {},
                            "value": {},
                            "total": {}
                        }
                    }
                }
            },
            "dataLabels": {
                "enabled": false,
                "offsetX": -2,
                "offsetY": -3,
                "style": {
                    "fontWeight": 700,
                    "colors": [
                        "#fff"
                    ]
                },
                "background": {
                    "enabled": false
                }
            },
            "grid": {
                "show": false,
                "borderColor": "#6e7eaa",
                "yaxis": {
                    "lines": {
                        "show": false
                    }
                },
                "row": {},
                "padding": {
                    "right": 25,
                    "left": 15
                }
            },
            "legend": {
                "show": false,
                "fontSize": 14,
                "offsetY": 0,
                "markers": {
                    "shape": "square",
                    "size": 8
                },
                "itemMargin": {
                    "vertical": 0
                }
            },
            "series": [
                {
                    "name": "Bar",
                    "data": [
                        {
                            "x": "Incorrecto",
                            "y": "10",
                            "fillColor": "#FF3300"
                        },
                        {
                            "x": "Ambiguo",
                            "y": "12",
                            "fillColor": "#FF6600"
                        },
                        {
                            "x": "Incompleto",
                            "y": "15",
                            "fillColor": "#FF9900"
                        },
                        {
                            "x": "Débil",
                            "y": "19",
                            "fillColor": "#FFCC00"
                        },
                        {
                            "x": "Intrascedente",
                            "y": "23",
                            "fillColor": "#FFCC66"
                        },
                        {
                            "x": "Inestable",
                            "y": "26",
                            "fillColor": "#FFE166"
                        },
                        {
                            "x": "NO Comprobable",
                            "y": "29",
                            "fillColor": "#FFFF00"
                        },
                        {
                            "x": "NO Identificable",
                            "y": "32",
                            "fillColor": "#FFFF66"
                        },
                        {
                            "x": "NO Trazable",
                            "y": "35",
                            "fillColor": "#FFFF99"
                        }
                    ],
                    "zIndex": 0
                }
            ],
            "stroke": {
                "show": false,
                "fill": {
                    "type": "solid",
                    "opacity": 0.85,
                    "gradient": {
                        "shade": "dark",
                        "type": "horizontal",
                        "shadeIntensity": 0.5,
                        "inverseColors": true,
                        "opacityFrom": 1,
                        "opacityTo": 1,
                        "stops": [
                            0,
                            50,
                            100
                        ],
                        "colorStops": []
                    }
                }
            },
            "tooltip": {
                "shared": false,
                "hideEmptySeries": true,
                "intersect": true
            },
            "xaxis": {
                "labels": {
                    "show": false,
                    "style": {}
                },
                "group": {
                    "groups": [],
                    "style": {
                        "colors": [],
                        "fontSize": "12px",
                        "fontWeight": 400,
                        "cssClass": ""
                    }
                },
                "axisBorder": {
                    "show": false
                },
                "axisTicks": {
                    "show": false
                },
                "tickPlacement": "between",
                "title": {
                    "style": {
                        "fontWeight": 700
                    }
                },
                "tooltip": {
                    "enabled": false
                }
            },
            "yaxis": {
                "reversed": true,
                "tickAmount": 5,
                "labels": {
                    "offsetX": 323,
                    "style": {}
                },
                "title": {
                    "style": {
                        "fontWeight": 700
                    }
                }
            },
            "theme": {
                "mode": "dark",
                "palette": "palette4"
            }
        }

    this.BarraVerde = {
        "chart": {
            "animations": {
                "enabled": false,
                "easing": "swing"
            },
            "background": "#292D33",
            "foreColor": "#fff",
            "fontFamily": "Roboto",
            "height": 365,
            "id": "fPlOH",
            "stackOnlyBar": true,
            "toolbar": {
                "show": false
            },
            "type": "bar",
            "width": 118,
            "zoom": {
                "enabled": false
            }
        },
        "plotOptions": {
            "bar": {
                "horizontal": true,
                "barHeight": "100%",
                "borderRadiusApplication": "around",
                "borderRadiusWhenStacked": "last",
                "hideZeroBarsWhenGrouped": false,
                "isDumbbell": false,
                "isFunnel": false,
                "isFunnel3d": true,
                "dataLabels": {
                    "position": "center",
                    "total": {
                        "enabled": false,
                        "offsetX": 0,
                        "offsetY": 0,
                        "style": {
                            "color": "#373d3f",
                            "fontSize": "12px",
                            "fontWeight": 600
                        }
                    }
                }
            },
            "bubble": {
                "zScaling": true
            },
            "treemap": {
                "dataLabels": {
                    "format": "scale"
                }
            },
            "radialBar": {
                "hollow": {
                    "background": "#fff"
                },
                "dataLabels": {
                    "name": {},
                    "value": {},
                    "total": {}
                },
                "barLabels": {
                    "enabled": false,
                    "margin": 5,
                    "useSeriesColors": true,
                    "fontWeight": 600,
                    "fontSize": "16px"
                }
            },
            "pie": {
                "donut": {
                    "labels": {
                        "name": {},
                        "value": {},
                        "total": {}
                    }
                }
            }
        },
        "dataLabels": {
            "enabled": false,
            "offsetX": -1,
            "offsetY": 7,
            "style": {
                "fontWeight": 700,
                "colors": [
                    "#fff"
                ]
            },
            "background": {
                "enabled": false
            }
        },
        "grid": {
            "show": false,
            "borderColor": "#6e7eaa",
            "padding": {
                "right": 25,
                "left": 15
            }
        },
        "legend": {
            "show": false,
            "fontSize": 14,
            "offsetY": 0,
            "markers": {
                "shape": "square",
                "size": 8
            },
            "itemMargin": {
                "vertical": 0
            }
        },
        "series": [
            {
                "name": "Bar",
                "data": [
                    {
                        "x": "1",
                        "y": 10,
                        "fillColor": "#37502A"
                    },
                    {
                        "x": "2",
                        "y": "10",
                        "fillColor": "#789D6A"
                    },
                    {
                        "x": "3",
                        "y": "10",
                        "fillColor": "#608928"
                    },
                    {
                        "x": "4",
                        "y": "10",
                        "fillColor": "#2C9D54"
                    },
                    {
                        "x": "5",
                        "y": 10,
                        "fillColor": "#86B858"
                    },
                    {
                        "x": "6",
                        "y": 10,
                        "fillColor": "#6BE06D"
                    },
                    {
                        "x": "7",
                        "y": 10,
                        "fillColor": "#8FE06D"
                    },
                    {
                        "x": "8",
                        "y": 10,
                        "fillColor": "#B6E06D"
                    },
                    {
                        "x": "9",
                        "y": 10,
                        "fillColor": "#B6E06D"
                    }
                ],
                "zIndex": 0
            }
        ],
        "stroke": {
            "show": false,
            "width": 0,
            "fill": {
                "type": "solid",
                "opacity": 0.85,
                "gradient": {
                    "shade": "dark",
                    "type": "horizontal",
                    "shadeIntensity": 0.5,
                    "inverseColors": true,
                    "opacityFrom": 1,
                    "opacityTo": 1,
                    "stops": [
                        0,
                        50,
                        100
                    ],
                    "colorStops": []
                }
            }
        },
        "tooltip": {
            "shared": false,
            "hideEmptySeries": true,
            "intersect": true
        },
        "xaxis": {
            "offsetY": -100,
            "labels": {
                "show": false,
                "style": {
                    "fontSize": 2,
                    "fontWeight": 100
                },
                "offsetX": -100,
                "offsetY": -100
            },
            "group": {
                "groups": [],
                "style": {
                    "colors": [],
                    "fontSize": "12px",
                    "fontWeight": 400,
                    "cssClass": ""
                }
            },
            "axisBorder": {
                "show": false
            },
            "axisTicks": {
                "show": false
            },
            "tickPlacement": "between",
            "title": {
                "style": {
                    "fontWeight": 700
                }
            },
            "tooltip": {
                "enabled": false
            }
        },
        "yaxis": {
            "tickAmount": 5,
            "max": 7,
            "min": 0,
            "labels": {
                "offsetX": 45,
                "style": {
                    "fontSize": 17,
                    "fontWeight": 100
                }
            },
            "title": {
                "style": {
                    "fontWeight": 700
                }
            }
        },
        "theme": {
            "mode": "dark",
            "palette": "palette4"
        }
    }

    this.GraficaVerde = {
        "annotations": {},
        "chart": {
            "animations": {
                "enabled": false,
                "easing": "swing"
            },
            "background": "#292D33",
            "dropShadow": {
                "left": -6,
                "blur": 0
            },
            "foreColor": "#fff",
            "fontFamily": "Roboto",
            "height": 375,
            "id": "ECdLn",
            "stackOnlyBar": true,
            "toolbar": {
                "show": false
            },
            "type": "bar",
            "width": 601,
            "zoom": {
                "enabled": false
            }
        },
        "plotOptions": {
            "bar": {
                "horizontal": true,
                "barHeight": "100%",
                "borderRadiusApplication": "end",
                "borderRadiusWhenStacked": "last",
                "hideZeroBarsWhenGrouped": false,
                "isDumbbell": false,
                "isFunnel": false,
                "isFunnel3d": true,
                "colors": {
                    "backgroundBarOpacity": 0
                },
                "dataLabels": {
                    "total": {
                        "enabled": false,
                        "offsetX": 0,
                        "offsetY": 0,
                        "style": {
                            "color": "#373d3f",
                            "fontSize": "12px",
                            "fontWeight": 600
                        }
                    }
                }
            },
            "bubble": {
                "zScaling": true
            },
            "treemap": {
                "dataLabels": {
                    "format": "scale"
                }
            },
            "radialBar": {
                "hollow": {
                    "background": "#fff"
                },
                "dataLabels": {
                    "name": {},
                    "value": {},
                    "total": {}
                },
                "barLabels": {
                    "enabled": false,
                    "margin": 5,
                    "useSeriesColors": true,
                    "fontWeight": 600,
                    "fontSize": "16px"
                }
            },
            "pie": {
                "donut": {
                    "labels": {
                        "name": {},
                        "value": {},
                        "total": {}
                    }
                }
            }
        },
        "dataLabels": {
            "enabled": false,
            "offsetX": -2,
            "offsetY": -3,
            "style": {
                "fontWeight": 700,
                "colors": [
                    "#fff"
                ]
            },
            "background": {
                "enabled": false
            }
        },
        "grid": {
            "show": false,
            "borderColor": "#6e7eaa",
            "padding": {
                "top": -5,
                "right": 25,
                "left": 15
            }
        },
        "legend": {
            "fontSize": "14",
            "offsetY": 0,
            "markers": {
                "width": 8
            },
            "itemMargin": {
                "vertical": 0
            }
        },
        "series": [
            {
                "name": "Bar",
                "data": [
                    {
                        "x": "Correcto",
                        "y": "15",
                        "fillColor": "#375623"
                    },
                    {
                        "x": "Inequívoco",
                        "y": "22",
                        "fillColor": "#548235"
                    },
                    {
                        "x": "Completo",
                        "y": 30,
                        "fillColor": "#669900"
                    },
                    {
                        "x": "Consistente",
                        "y": 40,
                        "fillColor": "#00B050"
                    },
                    {
                        "x": "Importante",
                        "y": "50",
                        "fillColor": "#92D050"
                    },
                    {
                        "x": "Estable",
                        "y": "60",
                        "fillColor": "#66FF66"
                    },
                    {
                        "x": "Comprobable",
                        "y": "70",
                        "fillColor": "#99FF66"
                    },
                    {
                        "x": "Identificable",
                        "y": "80",
                        "fillColor": "#CCFF66"
                    },
                    {
                        "x": "Trazable",
                        "y": "90",
                        "fillColor": "#CCFF99"
                    }
                ],
                "zIndex": 0
            }
        ],
        "stroke": {
            "show": false,
            "fill": {
                "type": "solid",
                "opacity": 0.85,
                "gradient": {
                    "shade": "dark",
                    "type": "horizontal",
                    "shadeIntensity": 0.5,
                    "inverseColors": true,
                    "opacityFrom": 1,
                    "opacityTo": 1,
                    "stops": [
                        0,
                        50,
                        100
                    ]
                }
            }
        },
        "tooltip": {
            "shared": false,
            "intersect": true,
            "theme": "dark"
        },
        "xaxis": {
            "offsetY": 100,
            "labels": {
                "show": false,
                "trim": true,
                "style": {
                    "fontSize": 80,
                    "fontWeight": 200
                },
                "offsetX": -36
            },
            "group": {
                "groups": [],
                "style": {
                    "colors": [],
                    "fontSize": "12px",
                    "fontWeight": 400,
                    "cssClass": ""
                }
            },
            "axisBorder": {
                "show": false
            },
            "axisTicks": {
                "show": false
            },
            "tickPlacement": "between",
            "title": {
                "text": "",
                "style": {
                    "fontSize": 14,
                    "fontWeight": 700
                }
            },
            "tooltip": {
                "enabled": false
            }
        },
        "yaxis": {
            "tickAmount": 2,
            "max": 100,
            "min": 0,
            "labels": {
                "offsetX": 0,
                "style": {
                    "fontSize": "10",
                    "fontWeight": 100
                }
            },
            "title": {
                "text": "",
                "style": {
                    "fontWeight": 700
                }
            }
        },
        "theme": {
            "mode": "dark",
            "palette": "palette4"
        }
      
    }
}
}