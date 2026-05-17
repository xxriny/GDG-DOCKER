# Google Developers Groups 세션 실습 - DOCKER, GCP CLOUD RUN

- Next.js + Docker + Cloud Run
- 간단한 포트폴리오 사이트를 만들고 Docker 컨테이너화를 통해 Google Cloud Run에 배포합니다.

## 🛠 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Deployment**: Google Cloud Run (Docker)
- **Language**: TypeScript

---

## 💻 Local Development

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```
접속 주소: [http://localhost:3000](http://localhost:3000)

---

## 🐳 Docker (Local Test)

Cloud Run에 배포하기 전, 로컬에서 컨테이너 환경을 테스트할 수 있습니다.

### 1. 이미지 빌드 및 확인
```bash
docker build -t my-app .
```
```bash
docker images
```

### 2. 컨테이너 실행, 중지 및 확인
```bash
docker run -d -p 3000:8080 my-app
```

```bash
docker ps
```

```bash
docker stop [컨테이너_ID 또는 이름]
```

### 3. 로그 확인
```bash
# 실시간 로그 스트리밍
docker logs -f my-app
# 특정 컨테이너 로그 확인
docker logs my-app
```
### 4. 컨테이너 접속
```bash
docker exec -it [컨테이너명] //bin/sh
```
```bash
#단일 명령어
docker exec [컨테이너명] ls -l
```
### 5. 파일에 정의된 여러 컨테이너 생성, 시작 및 연결
```bash
  docker-compose up -d
```
접속 주소: [http://localhost:3000](http://localhost:3000)

---

## ☁️ Cloud Run Deployment

Google Cloud SDK가 설치되어 있고 로그인이 완료된 상태여야 합니다.

### 1. 프로젝트 설정 및 인증
```bash
gcloud auth login
gcloud config set project [YOUR_PROJECT_ID]
# 로컬 빌드 방식 사용 시 필수
gcloud auth configure-docker gcr.io
```

### 2. 이미지 빌드 및 업로드, 태그 생성 
```bash
# 로컬 빌드 방식
docker tag my-app:latest gcr.io/[PROJECT_ID]/my-app:latest
docker push gcr.io/[PROJECT_ID]/my-app:latest
# 또는 구글 클라우드 빌드 방식 (구글 서버 자원 이용)
gcloud builds submit --tag gcr.io/[YOUR_PROJECT_ID]/my-app .
```

### 3. Cloud Run 배포
```bash
gcloud run deploy portfolio-site \
  --image gcr.io/[YOUR_PROJECT_ID]/my-app \
  --platform managed \
  --region asia-northeast3 \
  --allow-unauthenticated
```

### 4. 태그 삭제 및 artifactregistry 활성화
```bash
docker rmi gcr.io/aerial-rush-495318-h5/my-app:later
# Artifact Registry 활성화
gcloud services enable artifactregistry.googleapis.com
```


---

## 📝 Docker

- **컨테이너 설정**: `Dockerfile`에서 빌드 단계 및 보안 설정을 관리
- **다중 컨테이너** : `docker-compose.yml`에서 여러 개의 컨테이너 관리
---

## ⚠️ 주의
- `next.config.mjs`의 `output: 'standalone'` 설정은 Docker 빌드 용량 최적화를 위해 필수
- Cloud Run 배포 시 기본 포트는 `8080`으로 설정되어 있습니다.
