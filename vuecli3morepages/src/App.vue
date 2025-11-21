<template>
  <main class="page">
    <header class="bar">
      <h1 class="title">🔥 郝炉烤鸭介绍</h1>
      <select v-model="selected" class="select">
        <option v-for="op in options" :key="op.value" :value="op.value">
          {{ op.label }}
        </option>
      </select>
    </header>

    <section class="card">
      <pre class="content">{{ text }}</pre>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const contentMap = {
  crispy_duck: `郝炉酥皮烤鸭
尊敬的各位贵宾中午/晚上好现在给您上的这道菜是本店招牌精品酥皮烤鸭，我用自编的一首诗给您介绍一下吃法
鸭皮香脆鲜品尝，香甜要沾玫瑰糖
葱丝瓜条甜面酱，创新口味是花香
鸭饼透明鸭肉棒，郝炉烤鸭美名扬
请您品尝，祝您用餐愉快！`,

  caviar_duck: `郝炉精品鱼子酱烤鸭
鱼子酱烤鸭话术介绍
尊敬的各位贵宾中午/晚上好贵客到聚郝炉，黑鱼子酱精品酥皮烤鸭款待您心中最重要的人，我用自编的一首诗给您介绍一下吃法
鸭皮香脆鲜品尝，香甜要沾玫瑰糖。
葱丝瓜条甜面酱，创新口味是花香
鸭饼透明鸭肉棒，郝炉烤鸭美名扬
请您品尝，祝您用餐愉快！`,

  scallion_yellow_croaker: `首创葱烧黄鱼泡果子
尊敬的各位贵宾中午/晚上好
这是本店第二招牌菜首创葱烧黄鱼配果子，果子一上，喜从天降，剪刀一响，黄金万两，祝您如意吉祥，用餐愉快。`,

  duck_rice: `郝炉大鸭饭
您好贵宾现在我为您制作的是我们郝炉烤鸭招牌美食～～郝炉大鸭饭，米饭选用优质的东北五常大米，酱料是我店秘制鸭肉菌菇香酱！口味酱香浓郁香醇可口！祝您用餐愉快！`,

  ingot_shrimp: `元宝酥皮虾
现在为您上的这道菜是本店特色菜元宝酥皮虾，祝各位贵宾招财进宝财运滚滚`,

  osmanthus_braised_pork: `桂香果味红烧肉
现在为您上的这道菜是本店特色桂香果味红烧肉口感软糯，甜而不腻，请您品尝`,

  sauced_pork_taro: `酱肉香焗荔浦芋头
现在为您上的这道菜是酱肉香焗荔浦芋头口感鲜香软弱，每一口都是满满的幸福感，请您品尝`,

  salted_pork_garlic_veg: `咸肉金蒜生炒宁夏青菜仔
这道菜是本店特色菜咸肉金蒜生炒宁夏青菜仔，口味清甜不腻，滋味十足，请您品尝`,

  lord_stirfried_lamb: `贝勒爷炒羊腿肉
这是本店特色菜贝勒爷炒羊腿肉，一口入魂，回味老北京的烟火气！请您品尝`,

  shrimp_broth_tofu: `鲜虾骨汤野菌老豆腐
这是本店特色菜鲜虾骨汤野菌老豆腐口感鲜香四溢，暖胃又治愈，请您品尝`,

  scallion_blackbean_whitefish: `葱香豉汁淋太湖白鱼
现在为您上的是本店特色葱香豉汁太湖白鱼肉质细嫩，味道醇厚，请你品尝！`,
} as const;

type DishKey = keyof typeof contentMap;

const options: { label: string; value: DishKey }[] = [
  { label: '郝炉酥皮烤鸭', value: 'crispy_duck' },
  { label: '郝炉精品鱼子酱烤鸭', value: 'caviar_duck' },
  { label: '首创葱烧黄鱼泡果子', value: 'scallion_yellow_croaker' },
  { label: '郝炉大鸭饭', value: 'duck_rice' },
  { label: '元宝酥皮虾', value: 'ingot_shrimp' },
  { label: '桂香果味红烧肉', value: 'osmanthus_braised_pork' },
  { label: '酱肉香焗荔浦芋头', value: 'sauced_pork_taro' },
  { label: '咸肉金蒜生炒宁夏青菜仔', value: 'salted_pork_garlic_veg' },
  { label: '贝勒爷炒羊腿肉', value: 'lord_stirfried_lamb' },
  { label: '鲜虾骨汤野菌老豆腐', value: 'shrimp_broth_tofu' },
  { label: '葱香豉汁淋太湖白鱼', value: 'scallion_blackbean_whitefish' },
];

const selected = ref<DishKey>('crispy_duck');
const text = computed(() => contentMap[selected.value]);
</script>

<style scoped>
:root {
  --brand: #ff5a1f;         /* 品牌主色：亮眼橙 */
  --brand-2: #ff814a;       /* 渐变辅助 */
  --accent: #7c4dff;        /* 点缀紫 */
  --bg-grad-from: #fff4ec;  /* 背景渐变起 */
  --bg-grad-to: #fff;       /* 背景渐变止 */
  --card-bg: #ffffffcc;     /* 半透明卡片底 */
  --text: #1f2937;          /* 文字主色 */
  --muted: #6b7280;         /* 次要文字 */
  --border: #f0f0f0;
  --shadow: 0 10px 30px rgba(255, 90, 31, 0.15);
}

.page {
  max-width: 720px;
  margin: 0 auto;
  padding: 16px 14px 28px;
  color: var(--text);
  background: linear-gradient(180deg, var(--bg-grad-from), var(--bg-grad-to));
  min-height: 100vh;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
}

.bar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  top: 0;
  z-index: 10;
  background: linear-gradient(90deg, var(--brand), var(--brand-2));
  padding: 14px;
  border-radius: 14px;
  box-shadow: var(--shadow);
  color: #fff;
}

.title {
  font-size: 20px;
  margin: 0;
  color: #1f2937;
  letter-spacing: 0.5px;
  font-weight: 800;
  text-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.select {
  height: 44px;
  border: 2px solid rgba(255,255,255,0.85);
  border-radius: 12px;
  padding: 0 12px;
  color: #1f2937;
  background: #fff;
  font-size: 16px;
  outline: none;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  transition: box-shadow .18s ease, transform .06s ease;
}
.select:focus {
  box-shadow: 0 0 0 4px rgba(124, 77, 255, 0.25), 0 10px 24px rgba(0,0,0,0.12);
  border-color: var(--accent);
}
.select:active {
  transform: scale(0.995);
}

.card {
  margin-top: 14px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--card-bg);
  backdrop-filter: blur(6px);
  box-shadow: 0 14px 34px rgba(0,0,0,0.08);
  overflow: hidden;
  position: relative;
}
.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(180deg, var(--accent), var(--brand));
  opacity: 0.95;
}

.content {
  white-space: pre-wrap;
  line-height: 1.8;
  font-size: 17px;
  padding: 16px 16px 18px 18px;
  color: var(--text);
}
.content::selection {
  background: rgba(255, 90, 31, 0.18);
}

@media (max-width: 390px) {
  .title { font-size: 18px; }
  .content { font-size: 16px; }
}
</style>