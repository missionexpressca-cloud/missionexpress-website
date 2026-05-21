// Simple bilingual toggle: English (default) and Simplified Chinese.

const dict = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_network: "Network",
    nav_download: "Download",
    nav_store: "Online Store",
    nav_contact: "Contact",

    hero_kicker: "Last-mile, pickup, shipping & consolidation in Saskatchewan",
    hero_title: "Delivery services powered by two mobile apps",
    hero_sub:
      "Mission Go Logistics connects customers, local businesses, drivers, and logistics partners. With Mission Rush, customers can order delivery, pickup, parcel shipping, cargo, China consolidation, and intercity services from one app. With Mission Go, approved drivers receive and complete delivery tasks.",
    btn_get_quote: "Get a quote",
    btn_view_services: "View services",
    btn_contact_us: "Contact us",
    btn_download_apps: "Download apps",
    metric_days: "Days a week",
    metric_parcels: "Parcel & cargo deliveries",
    metric_cities: "Key cities: Moose Jaw & Regina",
    metric_apps: "Mission Rush for customers, Mission Go for drivers",

    home_apps_title: "Two Apps, One Delivery Network",
    home_apps_intro:
      "Mission Rush and Mission Go work together to connect customer orders with local delivery operations.",
    home_mission_rush_badge: "Customer App",
    home_mission_rush_title: "Mission Rush",
    home_mission_rush_body:
      "Customers can create delivery, pickup, cargo, parcel shipping, China consolidation, and intercity orders, pay securely, manage addresses, track order status, and access wallet and rewards features.",
    home_mission_go_badge: "Driver App",
    home_mission_go_title: "Mission Go",
    home_mission_go_body:
      "Approved drivers can go online, receive tasks, accept pickup and cargo orders, confirm pickup and delivery, upload photos, use navigation, and complete assigned routes.",

    feature_send: "Local Send",
    feature_food: "Food Pickup",
    feature_grocery: "Grocery Pickup",
    feature_cargo: "Cargo",
    feature_ship_parcel: "Ship Parcel",
    feature_consolidation: "China Consolidation",
    feature_intercity: "Intercity Hitch",
    feature_wallet: "Wallet & Rewards",
    feature_driver_online: "Driver Online",
    feature_direct_pickup: "Direct Pickup",
    feature_cargo_pickup: "Cargo Pickup",
    feature_parcel_tasks: "Parcel Tasks",
    feature_warehouse_delivery: "Warehouse Delivery",
    feature_photo_proof: "Photo Proof",
    feature_navigation: "Navigation",

    home_highlights_title: "Why partners choose Mission Go",
    home_highlights_intro:
      "Built for e-commerce platforms, carriers, local stores, and communities looking for a reliable Saskatchewan delivery partner.",
    home_card1_title: "Professional last-mile delivery",
    home_card1_body:
      "Same-day and next-day solutions for parcels, cargo, local pickup, and regional distribution.",
    home_card2_title: "App-based ordering and driver workflow",
    home_card2_body:
      "Customers order through Mission Rush while drivers complete tasks through Mission Go with status updates and proof of delivery.",
    home_card3_title: "Pickup points & micro-hubs",
    home_card3_body:
      "Neighborhood pickup locations and local hubs designed to support parcel handling, warehouse delivery, and reduced failed deliveries.",

    home_flow_title: "Simple, transparent delivery flow",
    home_flow_1_label: "1. Order or connect",
    home_flow_1_body:
      "Customers place orders in Mission Rush, or business partners connect through agreed workflows, manifests, or API integration.",
    home_flow_2_label: "2. Dispatch & route",
    home_flow_2_body:
      "Orders are prepared, sorted by service type, and dispatched to approved drivers through the Mission Go driver app.",
    home_flow_3_label: "3. Deliver & confirm",
    home_flow_3_body:
      "Drivers complete pickup and delivery with navigation, photo proof, status updates, and order completion records.",

    home_cta_title: "Need local delivery, pickup, or parcel support?",
    home_cta_body:
      "Download our apps or talk to us about last-mile delivery, local distribution, warehouse delivery, or pickup point cooperation in Moose Jaw and Regina.",

    footer_note:
      "Mission Go is the last-mile brand of Mission Express Logistics Inc., based in Moose Jaw, Saskatchewan, Canada.",

    about_title: "About Mission Go",
    about_intro:
      "Mission Go is the last-mile and local distribution brand of Mission Express Logistics Inc., founded in Saskatchewan to serve real businesses and real communities.",
    about_story_title: "Our story",
    about_story_body1:
      "We started in Moose Jaw with a simple idea: international parcels, e-commerce orders, and local shipments should not get 'lost' between major carriers and the customer’s front door.",
    about_story_body2:
      "Mission Go focuses on the last stretch of the journey – from regional hubs and local warehouses to homes, small businesses, and pickup points across the city.",
    about_focus_title: "What we focus on",
    about_focus_1: "Last-mile parcel delivery for e-commerce and freight partners",
    about_focus_2: "Neighborhood pickup points for flexible customer pickup",
    about_focus_3: "Route design and driver app workflows that reduce failed deliveries",
    about_values_title: "Our principles",
    about_values_1_title: "Local & human",
    about_values_1_body:
      "We are based in Saskatchewan, speak the language of local businesses, and value long-term partnerships over one-time transactions.",
    about_values_2_title: "Reliable operations",
    about_values_2_body:
      "Clear cut-off times, predictable routes, and a structured delivery process ensure consistent service.",
    about_values_3_title: "Transparent communication",
    about_values_3_body:
      "We keep carriers, merchants, and end customers informed with status updates and direct support.",

    services_title: "Services",
    services_intro:
      "Mission Go Logistics provides app-based customer delivery services, driver task workflows, and structured last-mile and regional logistics support for Saskatchewan.",
    services_customers_label: "For customers",
    services_customers_title: "Mission Rush App Services",
    services_customers_intro:
      "Customers can use Mission Rush to order, pay, track, manage addresses, request support, and access delivery services from one account.",
    service_send_title: "Local Send",
    service_send_body:
      "Send items across the city with address entry, distance-based quoting, secure payment, and order status updates.",
    service_food_grocery_title: "Food & Grocery Pickup",
    service_food_grocery_body:
      "Request restaurant, food, and grocery pickup from supported locations and let a Mission Go driver complete the delivery.",
    service_cargo_title: "Cargo Delivery",
    service_cargo_body:
      "For larger or heavier items, Mission Rush supports cargo-style delivery with item details, driver assignment, and delivery tracking.",
    service_ship_parcel_title: "Ship Parcel",
    service_ship_parcel_body:
      "Create parcel shipment requests, enter package details, receive shipping quotes, and manage parcel orders from the app.",
    service_consolidation_title: "China Consolidation",
    service_consolidation_body:
      "Shop from China, ship packages to our warehouse, consolidate multiple packages, pay international shipping fees, and arrange final delivery in Canada.",
    service_intercity_title: "Intercity Hitch",
    service_intercity_body:
      "Send items between supported cities such as Moose Jaw and Regina through scheduled intercity routes.",
    services_business_label: "For businesses and partners",
    services_business_title: "Last-mile logistics and platform support",
    services_business_intro:
      "We support e-commerce platforms, carriers, local stores, warehouses, and pickup point partners with practical delivery operations.",
    services_card1_title: "Last-mile parcel delivery",
    services_card1_body:
      "Doorstep delivery for standard parcels and 20kg+ packages, with clear time windows and status reporting back to your platform or carrier.",
    services_card1_b1: "Same-day / next-day options by zone",
    services_card1_b2: "Driver app with scan-to-deliver workflow",
    services_card1_b3: "Photo / signature proof of delivery where required",
    services_card2_title: "Pickup point & counter services",
    services_card2_body:
      "We operate or partner with neighborhood pickup points so customers can collect parcels at convenient times and locations.",
    services_card2_b1: "Parcel check-in / check-out with ID or code",
    services_card2_b2: "Storage rules and time limits agreed in advance",
    services_card2_b3: "Signage and basic customer support in English & Chinese",
    services_card3_title: "Line-haul & local distribution",
    services_card3_body:
      "Our core service area covers Saskatchewan, including Saskatoon, Regina, Prince Albert, Moose Jaw, and surrounding communities, with scheduled B2B routes for local businesses.",
    services_card3_b1: "Fixed routes with agreed departure / arrival windows",
    services_card3_b2: "Option to combine with last-mile delivery in each city",
    services_card3_b3: "Flexible vehicle sizes depending on volume",
    services_drivers_label: "For drivers",
    services_drivers_title: "Mission Go Driver App",
    services_drivers_intro:
      "Mission Go supports approved drivers with online status, task assignment, pickup and delivery confirmation, photo upload, and navigation support.",
    driver_service_1_title: "Pickup and delivery tasks",
    driver_service_1_body:
      "Drivers can receive Direct Pickup, Cargo Pickup, Ship Parcel, warehouse delivery, and route-based tasks.",
    driver_service_2_title: "Confirmation and photo proof",
    driver_service_2_body:
      "The app supports pickup confirmation, delivery confirmation, photo upload, and task records for operational visibility.",
    driver_service_3_title: "Navigation and task status",
    driver_service_3_body:
      "Drivers can use navigation support, update task status, and complete deliveries through a structured mobile workflow.",
    services_partner_title: "Partner with us",
    services_partner_body:
      "We are happy to discuss pilot projects, dedicated routes, app-based pickup services, warehouse delivery, and co-branded pickup points for platforms and carriers entering Saskatchewan.",

    network_title: "Service network",
    network_intro:
      "Mission Go provides delivery coverage across Saskatchewan, including Saskatoon, Regina, Moose Jaw, and nearby communities, with routes and service areas that can be expanded as demand grows.",
    network_cities_title: "Current focus cities",
    network_cities_1:
      "Saskatoon – Regina corridor — scheduled regional line-haul between Saskatoon and Regina, with zone-based pickup & last-mile delivery across intermediate communities.",
    network_cities_2:
      "Regina – regional line-haul from Moose Jaw and last-mile delivery by defined zones.",
    network_cities_3:
      "Moose Jaw – local delivery and pickup-point operations, including neighborhood parcel counters.",
    network_map_note:
      "Map placeholder: indicate Moose Jaw and Regina, plus planned coverage areas. Your technical team can later replace this with an interactive Google Map using the API keys we created.",
    network_expand_title: "Expansion & custom routes",
    network_expand_body:
      "We can design new routes and service areas based on your parcel volume, postal codes, and time window requirements. Talk to us early so we can build a scalable plan.",

    download_title: "Download Our Apps",
    download_desc:
      "Mission Go Logistics provides two mobile apps: Mission Rush for customers and Mission Go for approved drivers and delivery partners.",
    download_rush_badge: "Customer App",
    download_rush_title: "Mission Rush",
    download_rush_desc:
      "Mission Rush is the customer app for local delivery, food pickup, grocery pickup, cargo delivery, parcel shipping, China consolidation, intercity delivery, wallet, rewards, and order tracking.",
    download_rush_feature_1:
      "Create delivery, pickup, cargo, parcel, consolidation, and intercity orders.",
    download_rush_feature_2:
      "Manage addresses, payment, wallet balance, rewards, and order history.",
    download_rush_feature_3:
      "Track status updates and request support from one account.",
    download_go_badge: "Driver App",
    download_go_title: "Mission Go",
    download_go_desc:
      "Mission Go is the driver app for approved delivery partners. Drivers can receive tasks, manage online status, confirm pickup and delivery, upload photos, use navigation, and complete assigned routes.",
    download_go_feature_1:
      "Receive Direct Pickup, Cargo Pickup, Ship Parcel, and warehouse delivery tasks.",
    download_go_feature_2:
      "Confirm pickup and delivery with photo proof and task status updates.",
    download_go_feature_3:
      "Driver accounts may require approval before accepting delivery tasks.",
    download_app_store: "App Store",
    download_google_play: "Google Play",
    download_ios_title: "For iPhone",
    download_ios_desc: "Get the iPhone version from the App Store.",
    download_ios_store: "App Store",
    download_android_title: "For Android",
    download_android_desc: "Download the Android version or install it from Google Play.",
    download_android_play: "Google Play",
    download_show_all: "Show all apps",
    download_user_guide: "User Guide",
    download_mission_go_user_guide: "Mission Go User Guide",
    download_mission_go_user_guide_zh: "Mission Go Chinese User Guide",

    contact_title: "Contact us",
    contact_intro:
      "Whether you are a carrier, e-commerce platform, or local business, we are happy to discuss how Mission Go can support your delivery needs.",
    contact_business_title: "Business & partnership",
    contact_company_name_label: "Company:",
    contact_location_label: "Location:",
    contact_phone_label: "Phone:",
    contact_note:
      "Please include a short description of your business, approximate monthly parcel volume, and the cities or postal codes you would like to cover.",
    contact_form_title: "Send us a message",
    contact_form_note: "We will get back to you shortly.",
    contact_form_name: "Name",
    contact_form_email: "Email",
    contact_form_message: "Message",
    contact_form_button: "Send message",

    contact_prealert_tag: "[🇨🇳🇨🇦 China–Canada Consolidation]",
    contact_prealert_title: "",
    contact_prealert_btn: "Parcel Pre-Alert",

    contact_store_tag: "[Courier Platform]",
    contact_store_title: "Platform Portal",
    contact_store_btn: "Enter Platform",

    cc_ship_title: "China–Canada Consolidation Shipping",
    cc_ship_intro:
      "Ship your China online purchases to our China consolidation warehouse. We photo/weigh on arrival, optional repacking, then send via LCL sea freight to Canada. After customs clearance, we deliver from Moose Jaw.",
    cc_ship_subtitle: "Service details",
    cc_ship_1_label: "1. How to place an order:",
    cc_ship_1_line1:
      "Ship your China online orders directly to our China consolidation warehouse.",
    cc_ship_1_line2: "Consignee: Chris · +86 15015428263 · 510445",
    cc_ship_2_label: "2. Process:",
    cc_ship_2_flow:
      "Customer order → Send tracking number to us → Arrive at China warehouse → Photo & weigh → Repack/merge (optional) → Confirm charges → Pack & dispatch → LCL sea freight → Canada customs/inspection → Arrive station → Moose Jaw delivery → Completed",
    cc_ship_3_label: "3. Pricing rule:",
    cc_ship_3_text:
      "Charged by actual weight or volumetric weight, whichever is higher (warehouse measurement prevails).",
    cc_ship_4_label: "4. Transit time:",
    cc_ship_4_text:
      "LCL sea freight is affected by sailing schedule, customs, and weather. No guaranteed arrival date.",
    cc_ship_5_label: "5. Duties & inspection:",
    cc_ship_5_text:
      "DDP (tax included). Customs is uncontrollable; if seized by customs, we compensate up to ¥19/kg. For valuables, buy insurance or use express courier.",
    cc_ship_6_label: "6. Prohibited items:",
    cc_ship_6_text:
      "See “Prohibited list” below. Losses caused by prohibited items or misdeclaration are borne by the customer.",
    cc_ship_7_label: "7. General cargo rate:",
    cc_ship_7_text: "1–15kg ¥28/kg; 15kg+ ¥22/kg."
  },

  zh: {
    nav_home: "首页",
    nav_about: "关于我们",
    nav_services: "服务项目",
    nav_network: "服务网络",
    nav_download: "下载",
    nav_store: "网上商城",
    nav_contact: "联系合作",

    hero_kicker: "萨省本地配送、取件、寄件与集运服务",
    hero_title: "由两个移动 App 支持的本地配送服务",
    hero_sub:
      "Mission Go Logistics 连接用户、本地商家、司机和物流合作伙伴。用户通过 Mission Rush 可以在一个 App 内下单同城配送、取件、包裹寄送、大件配送、中国集运和跨城服务；审核通过的司机通过 Mission Go 接收并完成配送任务。",
    btn_get_quote: "获取报价",
    btn_view_services: "查看服务",
    btn_contact_us: "联系我们",
    btn_download_apps: "下载 App",
    metric_days: "每周运营天数",
    metric_parcels: "包裹与大件配送",
    metric_cities: "重点服务城市：穆斯乔 & 里贾纳",
    metric_apps: "Mission Rush 用户端，Mission Go 司机端",

    home_apps_title: "两个 App，一个配送网络",
    home_apps_intro:
      "Mission Rush 和 Mission Go 共同把用户订单与本地配送运营连接起来。",
    home_mission_rush_badge: "用户端 App",
    home_mission_rush_title: "Mission Rush",
    home_mission_rush_body:
      "用户可以创建同城配送、取件、大件配送、包裹寄送、中国集运和跨城订单，完成安全支付、地址管理、订单追踪，并使用钱包和积分功能。",
    home_mission_go_badge: "司机端 App",
    home_mission_go_title: "Mission Go",
    home_mission_go_body:
      "审核通过的司机可以上线接单，接收任务，接受取件和大件订单，确认取件和送达，上传照片，使用导航并完成路线任务。",

    feature_send: "同城配送",
    feature_food: "餐食取件",
    feature_grocery: "超市取件",
    feature_cargo: "大件配送",
    feature_ship_parcel: "包裹寄送",
    feature_consolidation: "中国集运",
    feature_intercity: "跨城顺路带",
    feature_wallet: "钱包与积分",
    feature_driver_online: "司机上线",
    feature_direct_pickup: "同城取件",
    feature_cargo_pickup: "大件取件",
    feature_parcel_tasks: "包裹任务",
    feature_warehouse_delivery: "仓库派送",
    feature_photo_proof: "照片留证",
    feature_navigation: "导航支持",

    home_highlights_title: "合作伙伴为什么选择 Mission Go",
    home_highlights_intro:
      "为电商平台、承运商、本地门店和社区用户打造的萨省本地配送合作伙伴。",
    home_card1_title: "专业末端配送",
    home_card1_body: "支持包裹、大件、本地取件、当日 / 次日配送与区域分拨。",
    home_card2_title: "App 下单与司机任务流程",
    home_card2_body:
      "用户通过 Mission Rush 下单，司机通过 Mission Go 完成任务，并回传状态更新和送达证明。",
    home_card3_title: "自提点与微型中转仓",
    home_card3_body: "建设社区自提点与本地中转仓，支持包裹处理、仓库派送，并减少投递失败。",

    home_flow_title: "清晰透明的配送流程",
    home_flow_1_label: "1. 下单或对接",
    home_flow_1_body:
      "用户通过 Mission Rush 下单，企业合作伙伴也可以通过约定流程、清单或 API 对接。",
    home_flow_2_label: "2. 派单与路线",
    home_flow_2_body:
      "订单按服务类型处理和分拣，并通过 Mission Go 司机端派发给审核通过的司机。",
    home_flow_3_label: "3. 配送与确认",
    home_flow_3_body:
      "司机通过导航、照片留证、状态更新和完成记录，完成取件与送达。",

    home_cta_title: "需要本地配送、取件或包裹服务？",
    home_cta_body:
      "欢迎下载我们的 App，或联系我们洽谈末端配送、本地分拨、仓库派送，以及穆斯乔和里贾纳的自提点合作。",

    footer_note:
      "Mission Go 为 Mission Express Logistics Inc. 旗下末端派送品牌，总部位于加拿大萨省穆斯乔。",

    about_title: "关于 Mission Go",
    about_intro:
      "Mission Go 是 Mission Express Logistics Inc. 的末端派送与本地分拨品牌，诞生于萨省，服务真实的企业与社区。",
    about_story_title: "我们的故事",
    about_story_body1:
      "我们从穆斯乔起步，只想解决一个简单的问题：跨境包裹、电商订单和本地货物，不应该在“大公司”和客户家门之间迷路。",
    about_story_body2:
      "Mission Go 专注于“最后一公里”，从区域枢纽和本地仓库，把货物安全送达居民、商铺和自提点。",
    about_focus_title: "我们的重点方向",
    about_focus_1: "跨境与电商末端派送",
    about_focus_2: "社区自提点与门店代收",
    about_focus_3: "减少投递失败的路线与系统设计",
    about_values_title: "我们的原则",
    about_values_1_title: "本地 · 有温度",
    about_values_1_body:
      "扎根萨省，懂得本地商家的语言，更重视长期合作关系而非一次性交易。",
    about_values_2_title: "稳定的运营",
    about_values_2_body:
      "明确截单时间、固定线路与标准化作业流程，让服务可预期。",
    about_values_3_title: "透明的沟通",
    about_values_3_body:
      "及时向承运商、商家和收件人反馈状态，有问题可以直接沟通。",

    services_title: "服务项目",
    services_intro:
      "Mission Go Logistics 为萨省提供基于 App 的用户下单服务、司机任务流程，以及结构化的末端配送和区域物流支持。",
    services_customers_label: "面向用户",
    services_customers_title: "Mission Rush 用户端服务",
    services_customers_intro:
      "用户可以通过 Mission Rush 完成下单、支付、追踪、地址管理、售后支持，并在一个账户中使用多个配送服务。",
    service_send_title: "同城配送",
    service_send_body:
      "输入取件和送达地址，获取基于距离的报价，完成安全支付，并查看订单状态。",
    service_food_grocery_title: "餐食与超市取件",
    service_food_grocery_body:
      "从支持的餐厅、食品地点或超市发起取件配送请求，由 Mission Go 司机完成配送。",
    service_cargo_title: "大件配送",
    service_cargo_body:
      "针对较大或较重物品，Mission Rush 支持填写物品信息、分配司机并追踪配送。",
    service_ship_parcel_title: "包裹寄送",
    service_ship_parcel_body:
      "创建包裹寄送请求，填写包裹资料，获取寄送报价，并在 App 内管理包裹订单。",
    service_consolidation_title: "中国集运",
    service_consolidation_body:
      "中国网购寄到我们的仓库，多个包裹合箱，支付国际运费，并安排加拿大境内最终派送。",
    service_intercity_title: "跨城顺路带",
    service_intercity_body:
      "在支持的城市之间寄送物品，例如穆斯乔与里贾纳之间的定期跨城路线。",
    services_business_label: "面向企业与合作伙伴",
    services_business_title: "末端物流与平台支持",
    services_business_intro:
      "我们为电商平台、承运商、本地门店、仓库和自提点合作伙伴提供实际可落地的配送运营支持。",
    services_card1_title: "末端派送服务",
    services_card1_body:
      "面向电商与货代的上门派送服务，支持 20kg+ 大件，并按约定回传签收结果。",
    services_card1_b1: "按区域提供当日 / 次日服务",
    services_card1_b2: "配合司机 App 的扫码装车与投递流程",
    services_card1_b3: "可选照片 / 签名等送达证明",
    services_card2_title: "自提点与门店代收",
    services_card2_body:
      "运营或合作社区自提点，让收件人可以自选时间与地点取件。",
    services_card2_b1: "按身份证或提货码办理取件",
    services_card2_b2: "提前约定包裹存放规则与时限",
    services_card2_b3: "可提供中英双语的基础咨询服务",
    services_card3_title: "区域运输与本地分拨",
    services_card3_body:
      "我们的核心服务范围覆盖萨斯喀彻温省，包括萨斯卡通、里贾纳、艾伯特王子城、穆斯乔及周边社区，并为本地企业提供定期的 B2B 配送线路。",
    services_card3_b1: "固定线路与约定班次时间",
    services_card3_b2: "可与两地末端派送衔接",
    services_card3_b3: "可根据货量选择合适车型",
    services_drivers_label: "面向司机",
    services_drivers_title: "Mission Go 司机端 App",
    services_drivers_intro:
      "Mission Go 为审核通过的司机提供上线状态、任务分配、取件与送达确认、照片上传和导航支持。",
    driver_service_1_title: "取件与配送任务",
    driver_service_1_body:
      "司机可以接收同城取件、大件取件、包裹寄送、仓库派送和路线配送任务。",
    driver_service_2_title: "确认与照片留证",
    driver_service_2_body:
      "App 支持取件确认、送达确认、照片上传和任务记录，方便运营追踪。",
    driver_service_3_title: "导航与任务状态",
    driver_service_3_body:
      "司机可以使用导航支持、更新任务状态，并通过标准化移动端流程完成配送。",
    services_partner_title: "期待与您合作",
    services_partner_body:
      "欢迎就试点项目、固定线路、App 取件服务、仓库派送或联合品牌自提点与我们沟通，共同服务萨省用户。",

    network_title: "服务网络",
    network_intro:
      "Mission Go 提供覆盖萨斯喀彻温省的配送服务，包括萨斯卡通、里贾纳、莫斯乔及附近社区，并可随着需求增长扩展运输线路和服务区域。",
    network_cities_title: "当前重点城市",
    network_cities_1:
      "萨斯卡通：萨斯卡通和里贾纳之间的定期区域干线运输，沿途社区提供基于区域的取货和最后一公里配送服务",
    network_cities_2:
      "里贾纳：穆斯乔与里贾纳之间的区域运输，以及分区派送服务。",
    network_cities_3:
      "穆斯乔：本地派送与社区自提点运营，包括门店代收。",
    network_map_note:
      "此处为示意地图区域。后续可由技术团队接入 Google Maps，在官网上展示真实路线与自提点位置。",
    network_expand_title: "线路扩展与定制",
    network_expand_body:
      "可根据您的包裹量、目标邮编和时效要求设计新线路，欢迎提前沟通，共同规划可扩展的网络。",

    download_title: "下载我们的 App",
    download_desc: "Mission Go Logistics 提供两个移动应用：Mission Rush 用户端 App，以及 Mission Go 司机 / 配送员端 App。",
    download_rush_badge: "用户端 App",
    download_rush_title: "Mission Rush",
    download_rush_desc:
      "Mission Rush 是面向用户的下单 App，支持同城配送、餐食取件、超市取件、大件配送、包裹寄送、中国集运、跨城配送、钱包、积分和订单追踪。",
    download_rush_feature_1:
      "创建同城配送、取件、大件、包裹、集运和跨城订单。",
    download_rush_feature_2:
      "管理地址、支付、钱包余额、积分和订单历史。",
    download_rush_feature_3:
      "在一个账户中查看状态更新并请求售后支持。",
    download_go_badge: "司机端 App",
    download_go_title: "Mission Go",
    download_go_desc:
      "Mission Go 是面向审核通过司机和配送合作伙伴的任务 App。司机可以接收任务、管理上线状态、确认取件和送达、上传照片、使用导航并完成路线任务。",
    download_go_feature_1:
      "接收同城取件、大件取件、包裹寄送和仓库派送任务。",
    download_go_feature_2:
      "通过照片留证和任务状态更新确认取件与送达。",
    download_go_feature_3:
      "司机账户可能需要审核通过后，才能接收配送任务。",
    download_app_store: "App Store",
    download_google_play: "Google Play",
    download_ios_title: "iPhone 版",
    download_ios_desc: "可通过 App Store 获取 iPhone 版本。",
    download_ios_store: "App Store",
    download_android_title: "Android 版",
    download_android_desc: "可直接下载 Android 安装包，或通过 Google Play 安装。",
    download_android_play: "Google Play",
    download_show_all: "显示全部应用",
    download_user_guide: "使用说明",
    download_mission_go_user_guide: "Mission Go 英文使用说明",
    download_mission_go_user_guide_zh: "Mission Go 中文使用说明",

    contact_title: "联系合作",
    contact_intro:
      "无论您是承运商、跨境电商平台还是本地商家，都欢迎与我们沟通合作方式。",
    contact_business_title: "商务合作",
    contact_company_name_label: "公司：",
    contact_location_label: "所在城市：",
    contact_phone_label: "电话：",
    contact_note:
      "发邮件时，建议简单说明业务类型、月度（或每日）包裹量，以及希望覆盖的城市或邮编范围。",
    contact_form_title: "给我们留言",
    contact_form_note: "我们会尽快回复您。",
    contact_form_name: "姓名",
    contact_form_email: "邮箱",
    contact_form_message: "留言内容",
    contact_form_button: "发送",

    contact_prealert_tag: "【🇨🇳🇨🇦中加集运】",
    contact_prealert_title: "",
    contact_prealert_btn: "包裹预报",

    contact_store_tag: "【物流平台】",
    contact_store_title: "平台入口",
    contact_store_btn: "进入平台",

    cc_ship_title: "中加集运",
    cc_ship_intro:
      "国内网购直接寄到我们中国集运仓，到仓后入库拍照/称重，可拆包合箱（可选），再海运拼箱到加拿大，清关后由 Moose Jaw 本地派送。",
    cc_ship_subtitle: "服务说明",
    cc_ship_1_label: "1. 下单方式：",
    cc_ship_1_line1: "国内网购直接寄到我们中国集运仓。",
    cc_ship_1_line2: "收件信息：Chris  15015428263  510445",
    cc_ship_2_label: "2. 流程：",
    cc_ship_2_flow:
      "客户网购下单 → 客户报运单号给我 → 到达中国集运仓 → 入库拍照/称重 → 拆包合箱（可选） → 计费确认 → 出库装箱 → 海运拼箱 → 加拿大清关/查验 → 到站 → Moose Jaw 派送 → 完成",
    cc_ship_3_label: "3. 计费规则：",
    cc_ship_3_text: "按重量或体积择大计费（仓库实测为准）。",
    cc_ship_4_label: "4. 时效：",
    cc_ship_4_text:
      "海运属于拼箱运输，受船期/清关/天气影响，不承诺固定到达日。",
    cc_ship_5_label: "5. 税费/查验：",
    cc_ship_5_text:
      "双清包税，但由于海关属于不可控因素，如遇被海关查扣情况，我司愿意按 ¥19/kg 补偿。贵重物建议购买保险或走商业快递。",
    cc_ship_6_label: "6. 禁运物品：",
    cc_ship_6_text:
      "见下方“禁运清单”，违禁/瞒报造成的损失由客户承担。",
    cc_ship_7_label: "7. 普货价格：",
    cc_ship_7_text: "普货 1–15kg ¥28/kg；15kg 起 ¥22/kg。"
  }
};

function applyLang(lang) {
  document.documentElement.setAttribute("lang", lang);

  const strings = dict[lang];
  if (!strings) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (strings[key] !== undefined) {
      el.textContent = strings[key];
    }
  });

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.textContent = lang === "en" ? "中文" : "EN";
  }

  localStorage.setItem("missiongo_lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const saved = localStorage.getItem("missiongo_lang") || "en";
  applyLang(saved);

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = localStorage.getItem("missiongo_lang") || "en";
      applyLang(current === "en" ? "zh" : "en");
    });
  }
});
